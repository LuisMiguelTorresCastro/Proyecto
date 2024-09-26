import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../hotel.interface';

@Component({
  selector: 'app-reg-hotel-card',
  templateUrl: './regHotel-card.component.html',
  styleUrls: ['./regHotel-card.component.css']
})
export class RegHotelCardComponent implements OnInit {
  @Input() hotel!: Hotel; 
  imageUrl: string | null = null;

  ngOnInit(): void {
    console.log('Hotel:', this.hotel);
    this.imageUrl = this.hotel.imageUrl || null; // Asignar la URL de la imagen si está disponible
  }
}
