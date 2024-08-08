import { Component, OnInit } from '@angular/core';
import { Service } from '../../../auth/services/service';

@Component({
  selector: 'app-agencias',
  templateUrl: './agencias.component.html',
  styleUrls: ['./agencias.component.css']
})
export class AgenciasComponent implements OnInit {
  agencias: any[] = [];

  constructor(private agenciasService: Service) { }

  ngOnInit(): void {
    this.loadAgencias();
  }

  loadAgencias(): void {
    this.agenciasService.getAgencias().subscribe((data: any[]) => {
      this.agencias = data;
    });
  }
}
