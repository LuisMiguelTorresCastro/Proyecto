import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detailsexp',
  templateUrl: './detailsexp.component.html',
  styleUrls: ['./detailsexp.component.css']
})
export class DetallesExperienciaComponent implements OnInit {
  experiencia: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:3000/Experiencias/${id}`)
      .subscribe(data => {
        this.experiencia = data;
      }, error => {
        console.error('Error al cargar la experiencia:', error);
      });
  }
}