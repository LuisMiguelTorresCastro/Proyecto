
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalles-paquete',
  templateUrl: './detailspaq.component.html',
  styleUrls: ['./detailspaq.component.css']
})
export class DetallesPaqueteComponent implements OnInit {
  paquete: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:3000/Paquetes/${id}`)
      .subscribe(data => {
        this.paquete = data;
      }, error => {
        console.error('Error al cargar el paquete:', error);
      });
  }
}
