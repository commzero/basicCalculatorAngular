import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddOperationComponent } from './pages/main-page/add-operation/add-operation.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainPageComponent,
    AddOperationComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
      AddOperationComponent
  ],
  providers: [],
  bootstrap: []
})
export class MainModule { }
