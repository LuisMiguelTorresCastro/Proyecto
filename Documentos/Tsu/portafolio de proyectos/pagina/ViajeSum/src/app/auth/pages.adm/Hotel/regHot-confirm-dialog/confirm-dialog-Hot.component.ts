import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hotel } from '../hotel.interface';

@Component({
  selector: 'app-confirm-dialog-Hot',
  templateUrl: './confirm-dialog-Hot.component.html',
  styleUrls: ['./confirm-dialog-Hot.component.css'] 
})
export class ConfirmDialogHotComponent {
  message: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogHotComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hotel,
  ) {
    this.message = '¿Estás seguro de que deseas guardar estos datos?';
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
