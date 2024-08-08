import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {
  private baseUrl = 'http://localhost:3000/agencies'; 

  constructor(private http: HttpClient) { }

  getAgencias(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getAgenciaById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  addAgencia(agencia: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, agencia);
  }

  updateAgencia(id: string, agencia: any): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/${id}`, agencia);
  }

  deleteAgencia(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
