import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogPapComponent } from '../../PaquetesPersonalizados/regPaP-confirm-dialog/confirm-dialog-Pap.component';

@Component({
  selector: 'app-reg-Paquete',
  templateUrl: './regPaquete.component.html',
  styleUrls: ['./regPaquete.component.css']
})
export class RegPaqueteComponent implements OnInit {
  firstFormGroup!: FormGroup;
  imageMethod: string = '';

  constructor(private _formBuilder: FormBuilder, private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nombrePaquete: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: [''],
      costo: [''],
      fechas: [''],
      tipo: [''],
      imageUrl: ['']
    });
  }

  openConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogPapComponent, {
      width: '300px',
      data: {} 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.saveStep1();
      }
    });
  }

  saveStep1() {
    const formData = {
      nombrePaquete: this.firstFormGroup.get('nombrePaquete')?.value,
      descripcion: this.firstFormGroup.get('descripcion')?.value,
      categoria: this.firstFormGroup.get('categoria')?.value,
      costo: this.firstFormGroup.get('costo')?.value,
      fechas: this.firstFormGroup.get('fechas')?.value,
      tipo: this.firstFormGroup.get('tipo')?.value,
      imageUrl: this.firstFormGroup.get('imageUrl')?.value
    };
    this.http.post('http://localhost:3000/Paquetes', formData)
      .subscribe(response => {
        window.location.reload(); // Recargar la página después de eliminar
      }, error => {
        console.error('Error:', error);
      });
  }
}
