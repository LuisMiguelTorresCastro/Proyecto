import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogHotComponent } from '../regHot-confirm-dialog/confirm-dialog-Hot.component';

@Component({
  selector: 'app-reg-Hotel',
  templateUrl: './regHotel.component.html',
  styleUrls: ['./regHotel.component.css']
})
export class RegHotelComponent implements OnInit {
  firstFormGroup!: FormGroup;
  imageMethod: string = '';

  constructor(private _formBuilder: FormBuilder, private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nombreHotel: ['', Validators.required],
      descripcion: ['', Validators.required],
      calificacion: [''],
      numeroHabitacion: [''],
      costo: [''],
      imageUrl: ['']
    });
  }

  openConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogHotComponent, {
      width: '300px',
      data: {} 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.saveStep1();
      }
    });
  }

  saveStep1() {
    const formData = {
      nombreHotel: this.firstFormGroup.get('nombreHotel')?.value,
      descripcion: this.firstFormGroup.get('descripcion')?.value,
      calificacion: this.firstFormGroup.get('calificacion')?.value,
      numeroHabitacion: this.firstFormGroup.get('numeroHabitacion')?.value,
      costo: this.firstFormGroup.get('costo')?.value,
      imageUrl: this.firstFormGroup.get('imageUrl')?.value
    };
    this.http.post('http://localhost:3000/Hoteles', formData)
      .subscribe(response => {
        window.location.reload(); // Recargar la página después de eliminar
      }, error => {
        console.error('Error:', error);
      });
  }
}
