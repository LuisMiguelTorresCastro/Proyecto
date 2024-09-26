import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Transportista } from '../transportista';
import { ConfirmDialogTraComponent } from '../regTra-confirm-dialog/confirm-dialog-Tra.component';


@Component({
  selector: 'app-transportista',
  templateUrl: './regTransportista.component.html',
  styleUrls: ['./regTransportista.component.css']
})
export class RegTransportistaComponent implements OnInit {
  transportistaFormGroup!: FormGroup;
  transportistas: Transportista[] = [];
  selectedTransportista: Transportista | null = null;

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.transportistaFormGroup = this._formBuilder.group({
      nombreTransportista: ['', Validators.required],
      costo: [0, Validators.required],
      descripcion: [''],
      telefono: ['', Validators.required],
    });

    this.loadTransportistas();
  }

  loadTransportistas() {
    this.http.get<Transportista[]>('http://localhost:3000/transportista').subscribe(response => {
      this.transportistas = response;
    }, error => {
      console.error('Error al cargar los transportistas:', error);
    });
  }

  onSelectTransportista(id: number) {
    this.http.get<Transportista>(`http://localhost:3000/transportista/${id}`).subscribe(response => {
      this.selectedTransportista = response;
      this.transportistaFormGroup.patchValue(response);
    }, error => {
      console.error('Error al obtener el transportista:', error);
    });
  }

  openConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogTraComponent, {
      width: '300px',
      data: { message: '¿Estás seguro de que deseas guardar estos datos?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.saveTransportista();
      }
    });
  }

  saveTransportista() {
    const formData = this.transportistaFormGroup.value;

    if (this.selectedTransportista) {
      this.http.patch(`http://localhost:3000/transportista/${this.selectedTransportista.idTransportista}`, formData)
        .subscribe(response => {
          console.log('Transportista actualizado:', response);
          this.loadTransportistas();
        }, error => {
          console.error('Error al actualizar el transportista:', error);
        });
    } else {
      this.http.post('http://localhost:3000/transportista', formData)
        .subscribe(response => {
          console.log('Transportista guardado:', response);
          window.location.reload(); // Recargar la página después de eliminar
        }, error => {
          console.error('Error al guardar el transportista:', error);
        });
    }
  }
}
