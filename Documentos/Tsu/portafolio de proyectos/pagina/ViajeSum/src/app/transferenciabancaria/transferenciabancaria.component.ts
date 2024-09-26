import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagoService } from '../services/pago.service';
@Component({
  selector: 'app-transferenciabancaria',
  templateUrl: './transferenciabancaria.component.html',
  styleUrls: ['./transferenciabancaria.component.css']
})
export class TransferenciaBancariaComponent implements OnInit {
  
  @Input() montoTotal!: number;  
  transferenciaForm: FormGroup;

  constructor(private fb: FormBuilder, private pagoService: PagoService) {
    this.transferenciaForm = this.fb.group({
      nombreTitular: ['', Validators.required],
      banco: ['', Validators.required],
      numeroCuenta: ['', [Validators.required, Validators.minLength(10)]],
      monto: [{ value: '', disabled: true }] 
    });
  }

  ngOnInit() {
    this.transferenciaForm.patchValue({
      monto: this.montoTotal
    });
  }

  onSubmit() {
    if (this.transferenciaForm.valid) {
      const datosPago = this.transferenciaForm.getRawValue();
      
      this.pagoService.realizarPagoTransferencia(datosPago)
        .subscribe(
          (response: any) => {
            console.log('Pago procesado exitosamente:', response);
          },
          (error: any) => {
            console.error('Error al procesar el pago:', error);
          }
        );
    }
  }
}
