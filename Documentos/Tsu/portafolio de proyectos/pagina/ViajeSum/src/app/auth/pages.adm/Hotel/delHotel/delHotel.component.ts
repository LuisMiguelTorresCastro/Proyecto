import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delHotel',
  templateUrl: './delHotel.component.html',
  styleUrls: ['./delHotel.component.css']
})
export class DelHotelComponent implements OnInit {
  deleteFormGroup!: FormGroup;
  Hotels: any[] = []; // Lista de Hoteles
  HotelId: string | null = null;

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.deleteFormGroup = this._formBuilder.group({
      nombreHotel: ['', Validators.required]
    });

    this.loadHotels(); // Cargar la lista de Hoteles
  }

  loadHotels() {
    this.http.get<any[]>('http://localhost:3000/Hoteles').subscribe(response => {
      this.Hotels = response;
    }, error => {
      console.error('Error al cargar los Hoteles:', error);
    });
  }

  deleteHotel() {
    const hotelToDelete = this.Hotels.find(hotel => hotel.nombreHotel === this.deleteFormGroup.value.nombreHotel);

    if (!hotelToDelete) {
      console.error('Hotel no encontrado');
      return;
    }

    this.HotelId = hotelToDelete.idHotel; // Asignar el ID del Hotel a eliminar

    this.http.delete(`http://localhost:3000/Hoteles/${this.HotelId}`)
      .subscribe(response => {
        window.location.reload(); // Recargar la página después de eliminar
      }, error => {
        console.error('Error al eliminar el Hotel:', error);
      });
  }
}
