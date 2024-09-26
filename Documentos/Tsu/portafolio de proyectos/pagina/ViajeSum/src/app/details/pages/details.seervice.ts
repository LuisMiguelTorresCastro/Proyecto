import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private apiUrl = 'http://localhost:3000/detalles'; 

  constructor(private http: HttpClient) { }

  getPaquetesById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/paquetes/${id}`);
  }

  getExperienceById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/experiencias/${id}`);
  }
}
