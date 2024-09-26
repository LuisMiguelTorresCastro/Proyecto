import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delGuia',
  templateUrl: './delGuia.component.html',
  styleUrls: ['./delGuia.component.css']
})
export class DelGuiasComponent implements OnInit {
  deleteFormGroup!: FormGroup;
  guias: any[] = []; // Lista de Guías
  guiaId: number | null = null;

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.deleteFormGroup = this._formBuilder.group({
      nomGuias: ['', Validators.required]
    });

    this.loadGuias(); // Cargar la lista de Guías
  }

  loadGuias() {
    this.http.get<any[]>('http://localhost:3000/Guias').subscribe(response => {
      this.guias = response;
    }, error => {
      console.error('Error al cargar las Guías:', error);
    });
  }

  deleteGuia() {
    const nombreGuia = this.deleteFormGroup.get('nomGuias')?.value;

    if (!nombreGuia) {
      console.error('Nombre de Guía no definido');
      return;
    }

    const guiaToDelete = this.guias.find(guia => guia.nombreGuias === nombreGuia);

    if (!guiaToDelete) {
      console.error('Guía no encontrada');
      return;
    }

    this.guiaId = guiaToDelete.idGuias; // Asignar el ID de la Guía a eliminar

    this.http.delete(`http://localhost:3000/Guias/${this.guiaId}`)
      .subscribe(response => {
        console.log('Guía eliminada:', response);
        window.location.reload(); // Recargar la página después de eliminar
      }, error => {
        console.error('Error al eliminar la Guía:', error);
      });
  }
}
