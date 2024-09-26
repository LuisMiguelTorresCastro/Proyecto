import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogHotComponent } from '../../Hotel/regHot-confirm-dialog/confirm-dialog-Hot.component';
import { Guias } from '../guias.interface';

@Component({
  selector: 'app-updGuias',
  templateUrl: './updGuias.component.html',
  styleUrls: ['./updGuias.component.css']
})
export class UpdGuiasComponent implements OnInit {
  updFormGroup!: FormGroup;
  guiaId: number | null = null;
  guias: Guias[] = [];
  isLinear = true;

  constructor(
    private _formBuilder: FormBuilder, 
    private http: HttpClient,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.updFormGroup = this._formBuilder.group({
      nombreGuias: [''],
      descripcion: ['']
    });

    this.loadGuias();
  }

  loadGuias() {
    this.http.get<Guias[]>('http://localhost:3000/Guias').subscribe(response => {
      this.guias = response;
    }, error => {
      console.error('Error al cargar las Guías:', error);
    });
  }

  onGuiaSelected(name: string) {
    const selectedGuia = this.guias.find(guia => guia.nombreGuias === name);
  
    if (selectedGuia) {
      this.guiaId = selectedGuia.idGuias;
      this.updFormGroup.patchValue(selectedGuia);
    } else {
      console.error('Guía no encontrada o ID de Guía no definido');
    }
  }
  
  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogHotComponent, {
      width: '300px',
      data: { message: '¿Estás seguro de que deseas guardar estos datos?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updGuia();
      }
    });
  }

  updGuia() {
    if (this.guiaId === null) {
      console.error('ID de Guía no definido');
      return;
    }

    const formData = {
      nombreGuias: this.updFormGroup.get('nombreGuias')?.value,
      descripcion: this.updFormGroup.get('descripcion')?.value
    };

    this.http.patch(`http://localhost:3000/Guias/${this.guiaId}`, formData)
      .subscribe(response => {
        console.log('Guía actualizada:', response);
      }, error => {
        console.error('Error al actualizar la Guía:', error);
      });
  }
}
