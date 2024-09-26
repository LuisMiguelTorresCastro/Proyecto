import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfirmDialogHotComponent } from '../regHot-confirm-dialog/confirm-dialog-Hot.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-updHotel',
  templateUrl: './updHotel.component.html',
  styleUrls: ['./updHotel.component.css']
})
export class UpdHotelComponent implements OnInit {
  updFormGroup!: FormGroup;
  hotelId: string | null = null;
  hotels: any[] = [];
  isLinear = true;

  constructor(
    private _formBuilder: FormBuilder, 
    private http: HttpClient,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.updFormGroup = this._formBuilder.group({
      nombreHotel: [''],
      descripcion: [''],
      calificacion: [''],
      numeroHabitacion: [''],
      costo: [''],
      imageUrl: ['']
    });

    this.loadHotels();
  }

  loadHotels() {
    this.http.get<any[]>('http://localhost:3000/Hoteles').subscribe(response => {
      this.hotels = response;
    }, error => {
      console.error('Error al cargar los Hoteles:', error);
    });
  }

  onHotelSelected(name: string) {
    const selectedHotel = this.hotels.find(hotel => hotel.nombreHotel === name);
  
    if (selectedHotel) {
      this.hotelId = selectedHotel.idHotel;
      this.updFormGroup.patchValue(selectedHotel);
    } else {
      console.error('Hotel no encontrado o ID de Hotel no definido');
    }
  }
  
  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogHotComponent, {
      width: '300px',
      data: { message: '¿Estás seguro de que deseas guardar estos datos?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updHotel();
      }
    });
  }
  updHotel() {
    if (!this.hotelId) {
      console.error('ID de Hotel no definido');
      return;
    }

    const formData = {
    nombreHotel: this.updFormGroup.get('nombreHotel')?.value,
    descripcion: this.updFormGroup.get('descripcion')?.value,
    calificacion: this.updFormGroup.get('calificacion')?.value,
    numeroHabitacion: this.updFormGroup.get('numeroHabitacion')?.value,
    costo: this.updFormGroup.get('costo')?.value
    };


    this.http.patch(`http://localhost:3000/Hoteles/${this.hotelId}`, formData)
      .subscribe(response => {
        window.location.reload(); // Recargar la página después de eliminar
      }, error => {
        console.error('Error al actualizar el Hotel:', error);
      });
  }
}
