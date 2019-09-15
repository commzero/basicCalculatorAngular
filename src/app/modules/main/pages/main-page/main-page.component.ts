import { Component, OnInit, ViewChild } from '@angular/core';
import { AddOperationComponent } from './add-operation/add-operation.component';
import { MatDialog } from '@angular/material/dialog';
import { CalculateService } from '../../services/http/calculate.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  displayedColumns: string[] = ['position', 'first', 'last', 'type', 'output', 'action'];

  operations: any;

  constructor(

    private dialog: MatDialog,

    private toast: MatSnackBar,

    private calculateService: CalculateService

  ) { }

  ngOnInit() {

    this.onGetOperations();

  }

  onGetOperations() {

    this.calculateService.getAllOperations().subscribe(operations => {

      this.operations = operations;

      console.log(operations);

    }, err => console.log(err));

  }

  onDeleteOperation(id) {

    let confirmDelete = confirm(`Delete Operation ${id} ?`);

    if (confirmDelete) {

      this.calculateService.deleteOperation(id).subscribe(operationDeleted => {

        console.log(operationDeleted);

        this.toast.open(`Deleted Operation ${id}!`);

        this.onGetOperations();

      }, err => console.log(err));

    } else {

      this.onGetOperations();

    }

  }

  openDialog(): void {

    const dialogRef = this.dialog.open(AddOperationComponent, {

      width: '250px',

    });

    dialogRef.afterClosed().subscribe(result => {

      this.onGetOperations();

    });
    
  }

}
