import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Agencia } from '../../../auth/pages.adm/Agencia/agencia.interface';


@Component({
  selector: 'app-agencias',
  templateUrl: './agencias.component.html',
  styleUrls: ['./agencias.component.css']
})
export class AgenciasComponent implements OnInit {
  agencias: Agencia[] = []; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAgencias();
  }

  private loadAgencias(): void {
    this.http.get<Agencia[]>('http://localhost:3000/agencias')
      .subscribe({
        next: (data) => {
          console.log('Agencias:', data);
          this.agencias = data;
        },
        error: (error) => {
          console.error('Error al cargar agencias:', error);
        }
      });
  }
}
