import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogTraComponent } from '../regTra-confirm-dialog/confirm-dialog-Tra.component';

@Component({
  selector: 'app-delTransportista',
  templateUrl: './delTransportista.component.html',
  styleUrls: ['./delTransportista.component.css']
})
export class DelTransportistaComponent implements OnInit {
  deleteFormGroup!: FormGroup;
  transportistas: any[] = []; // Lista de transportistas
  transportistaId: number | null = null;

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.deleteFormGroup = this._formBuilder.group({
      idTransportista: [{ value: '', disabled: true }],
      nombreTransportista: ['', Validators.required] // Asegúrate de que el nombre sea consistente
    });

    this.loadTransportistas(); // Cargar la lista de transportistas
  }

  loadTransportistas() {
    this.http.get<any[]>('http://localhost:3000/transportista').subscribe(response => {
      this.transportistas = response;
    }, error => {
      console.error('Error al cargar los transportistas:', error);
    });
  }

  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogTraComponent, {
      width: '300px',
      data: { message: '¿Estás seguro de que deseas eliminar este transportista?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteTransportista();
      }
    });
  }

  deleteTransportista() {
    if (!this.deleteFormGroup.value.nombreTransportista) {
      console.error('Nombre de transportista no definido');
      return;
    }

    const transportistaToDelete = this.transportistas.find(transportista => transportista.nombreTransportista === this.deleteFormGroup.value.nombreTransportista);
    
    if (!transportistaToDelete) {
      console.error('Transportista no encontrado');
      return;
    }

    this.transportistaId = transportistaToDelete.idTransportista; // Asignar el ID del transportista a eliminar

    this.http.delete(`http://localhost:3000/transportista/${this.transportistaId}`)
      .subscribe(response => {
        console.log('Transportista eliminado:', response);
        window.location.reload(); // Recargar la página después de eliminar
      }, error => {
        console.error('Error al eliminar el transportista:', error);
      });
  }
}
