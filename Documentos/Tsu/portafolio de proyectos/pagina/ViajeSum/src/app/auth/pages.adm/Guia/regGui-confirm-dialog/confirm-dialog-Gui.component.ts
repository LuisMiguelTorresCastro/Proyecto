import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Guias } from '../guias.interface';


@Component({
  selector: 'app-confirm-dialog-Gui',
  templateUrl: './confirm-dialog-Gui.component.html',
  styleUrls: ['./confirm-dialog-Gui.component.css'] 
})
export class ConfirmDialogGuiComponent {
  message: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogGuiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Guias,
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
