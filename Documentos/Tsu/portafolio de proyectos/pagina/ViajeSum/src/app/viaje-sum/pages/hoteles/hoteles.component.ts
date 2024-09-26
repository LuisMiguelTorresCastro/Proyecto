import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../auth/pages.adm/Hotel/hotel.interface';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit {
  hoteles: Hotel[] = []; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Hotel[]>('http://localhost:3000/Hoteles')
      .subscribe(data => {
        console.log('Hoteles:', data);
        this.hoteles = data;
      }, error => {
        console.error('Error:', error);
      });
  }
}

