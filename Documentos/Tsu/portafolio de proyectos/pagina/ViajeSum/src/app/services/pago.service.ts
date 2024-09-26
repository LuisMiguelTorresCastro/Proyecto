import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  private apiUrl = 'http://localhost:3000/transferenciabancaria';

  constructor(private http: HttpClient) { }

  // Método para procesar el pago por transferencia bancaria
  realizarPagoTransferencia(datosPago: any): Observable<any> {
    return this.http.post(this.apiUrl, datosPago);
  }
}
