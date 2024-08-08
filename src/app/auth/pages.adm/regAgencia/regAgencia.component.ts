import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-agencia',
  templateUrl: './regAgencia.component.html',
  styleUrls: ['./regAgencia.component.css']
})
export class RegAgenciaComponent implements OnInit {
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      nomAge: ['', Validators.required],
      TipAge: ['', Validators.required],
      emaAge: ['', [Validators.required, Validators.email]],
      telAge: ['', Validators.required],
      facebook: [''],
      twitter: [''],
      instagram: ['']
    });

    this.secondFormGroup = this._formBuilder.group({
      estado: ['', Validators.required],
      municipio: ['', Validators.required],
      codigoPostal: ['', Validators.required],
      localidad: ['', Validators.required],
      calle: ['', Validators.required]
    });
  }

  saveStep1(): void {
  
  }

  saveStep2(): void {

  }
}
