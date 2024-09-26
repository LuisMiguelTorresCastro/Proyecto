import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
onSubmit() {
throw new Error('Method not implemented.');
}
  idPaquete: number | null = null;
transferenciaForm: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idPaqueteParam = this.route.snapshot.paramMap.get('idPaquete');
    if (idPaqueteParam) {
      this.idPaquete = +idPaqueteParam;
      // Aquí puedes manejar la lógica si idPaquete es válido
    } else {
      // Maneja el caso en que idPaqueteParam es null
      console.error('ID de paquete no proporcionado');
    }
  }
}


