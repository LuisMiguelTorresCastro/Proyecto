import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Transportista } from '../transportista';

@Component({
  selector: 'app-confirm-dialog-Tra',
  templateUrl: './confirm-dialog-Tra.component.html',
  styleUrls: ['./confirm-dialog-Tra.component.css'] 
})
export class ConfirmDialogTraComponent {
  message: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogTraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Transportista,
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
