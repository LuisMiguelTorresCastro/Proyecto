import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Guias } from '../guias.interface';
import { ConfirmDialogGuiComponent } from '../regGui-confirm-dialog/confirm-dialog-Gui.component';

@Component({
  selector: 'app-guias',
  templateUrl: './regGuia.component.html',
  styleUrls: ['./regGuia.component.css']
})
export class RegGuiasComponent implements OnInit {
  guiasFormGroup!: FormGroup;
  guias: Guias[] = [];
  selectedGuia: Guias | null = null;

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.guiasFormGroup = this._formBuilder.group({
      nombreGuias: ['', Validators.required],
      descripcion: [''],
    });

    this.loadGuias();
  }

  loadGuias() {
    this.http.get<Guias[]>('http://localhost:3000/guias').subscribe(response => {
      this.guias = response;
    }, error => {
      console.error('Error al cargar las guías:', error);
    });
  }

  onSelectGuia(id: number) {
    this.http.get<Guias>(`http://localhost:3000/guias/${id}`).subscribe(response => {
      this.selectedGuia = response;
      this.guiasFormGroup.patchValue(response);
    }, error => {
      console.error('Error al obtener la guía:', error);
    });
  }

  openConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogGuiComponent, {
      width: '300px',
      data: { message: '¿Estás seguro de que deseas guardar estos datos?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.saveGuia();
      }
    });
  }

  saveGuia() {
    const formData = this.guiasFormGroup.value;

    if (this.selectedGuia) {
      this.http.patch(`http://localhost:3000/guias/${this.selectedGuia.idGuias}`, formData)
        .subscribe(response => {
          console.log('Guía actualizada:', response);
          this.loadGuias();
        }, error => {
          console.error('Error al actualizar la guía:', error);
        });
    } else {
      this.http.post('http://localhost:3000/guias', formData)
        .subscribe(response => {
          console.log('Guía guardada:', response);
          window.location.reload(); // Recargar la página después de eliminar
        }, error => {
          console.error('Error al guardar la guía:', error);
        });
    }
  }
}
