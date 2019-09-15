import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalculateService } from '../../../services/http/calculate.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-operation',
  templateUrl: './add-operation.component.html',
  styleUrls: ['./add-operation.component.css']
})

export class AddOperationComponent implements OnInit {

  addOperation = {

    x: 0,

    y: 0,

    type: '',

    result: 0

  }

  types = [

    { name: 'Addition', value: '+' },

    { name: 'Subtraction', value: '-' },

    { name: 'Multiple', value: '*' },

    { name: 'Division', value: '/' }

  ];

  constructor(

    public dialogRef: MatDialogRef<AddOperationComponent>,

    private calculateService: CalculateService,

    private toast: MatSnackBar

  ) { }

  ngOnInit() {
  }

  async onAddOperation() {

    await this.calc().then(res => {

      this.calculateService.addOperation(this.addOperation).subscribe(added => {

        this.toast.open('Added Successfully');

        console.log(added);

        this.onNoClick();

      }, err => console.log(err));

    })

  }

  async calc() {

    switch (this.addOperation.type) {

      case '+': {

        this.addOperation.result = this.addOperation.x + this.addOperation.y;

        break;

      }

      case '-': {

        this.addOperation.result = this.addOperation.x - this.addOperation.y;

        break;

      }

      case '*': {

        this.addOperation.result = this.addOperation.x * this.addOperation.y;

        break;

      }

      case '/': {

        this.addOperation.result = this.addOperation.x / this.addOperation.y;

        break;

      }

    }

  }

  onNoClick(): void {

    this.dialogRef.close();

  }

}
