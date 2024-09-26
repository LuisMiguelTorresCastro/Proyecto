import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogTraComponent } from '../regTra-confirm-dialog/confirm-dialog-Tra.component';

@Component({
  selector: 'app-updTransportista',
  templateUrl: './updTransportista.component.html',
  styleUrls: ['./updTransportista.component.css']
})
export class UpdTransportistaComponent implements OnInit {
  updFormGroup!: FormGroup;
  transportistaId: number | null = null;
  transportistas: any[] = [];
  isLinear = true;

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.updFormGroup = this._formBuilder.group({
      nombreTransportista: ['', Validators.required],
      descripcion: [''],
      costo: ['', Validators.required],
      telefono: ['', Validators.required]
    });

    this.loadTransportistas();
  }

  loadTransportistas() {
    this.http.get<any[]>('http://localhost:3000/transportista').subscribe(response => {
      this.transportistas = response;
    }, error => {
      console.error('Error al cargar los transportistas:', error);
    });
  }

  onTransportistaSelected(name: string) {
    const selectedTransportista = this.transportistas.find(transportista => transportista.nombreTransportista === name);

    if (selectedTransportista) {
      this.transportistaId = selectedTransportista.idTransportista;
      this.updFormGroup.patchValue(selectedTransportista);
    } else {
      console.error('Transportista no encontrado');
    }
  }

  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogTraComponent, {
      width: '300px',
      data: { message: '¿Estás seguro de que deseas guardar estos datos?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updTransportista();
      }
    });
  }

  updTransportista() {
    if (this.transportistaId === null) {
      console.error('ID de transportista no definido');
      return;
    }

    const formData = {
      nombreTransportista: this.updFormGroup.get('nombreTransportista')?.value,
      descripcion: this.updFormGroup.get('descripcion')?.value,
      costo: this.updFormGroup.get('costo')?.value,
      telefono: this.updFormGroup.get('telefono')?.value
    };

    this.http.patch(`http://localhost:3000/transportista/${this.transportistaId}`, formData)
      .subscribe(response => {
        console.log('Transportista actualizado:', response);
        window.location.reload(); // Recargar la página después de eliminar
      }, error => {
        console.error('Error al actualizar el transportista:', error);
      });
  }
}
