import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Paquete } from '../Paquete.interface';

@Component({
  selector: 'app-updPaquete',
  templateUrl: './updPaquete.component.html',
  styleUrls: ['./updPaquete.component.css']
})
export class UpdPaqueteComponent implements OnInit {
  updFormGroup!: FormGroup;
  paqueteId: string | null = null;
  paquetes: Paquete[] = [];
  isLinear: unknown;

  constructor(
    private _formBuilder: FormBuilder, 
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.updFormGroup = this._formBuilder.group({
      nombrePaquete: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: [''],
      costo: [''],
      fechas: [''],
      tipo: [''],
      imageUrl: ['']
    });

    this.loadPaquetes();
  }

  loadPaquetes() {
    this.http.get<Paquete[]>('http://localhost:3000/Paquetes').subscribe(response => {
      this.paquetes = response;
    }, error => {
      console.error('Error al cargar los Paquetes:', error);
    });
  }

  onPaqueteSelected(nombre: string) {
    const selectedPaquete = this.paquetes.find(paquete => paquete.nombrePaquete === nombre);

    if (selectedPaquete) {
      this.paqueteId = selectedPaquete.idPaquete || null;
      this.updFormGroup.patchValue({
        nombrePaquete: selectedPaquete.nombrePaquete,
        descripcion: selectedPaquete.descripcion,
        categoria: selectedPaquete.categoria,
        costo: selectedPaquete.costo,
        fechas: this.formatDateForInput(selectedPaquete.fechas),
        tipo: selectedPaquete.tipo,
        imageUrl: selectedPaquete.imageUrl || ''
      });
    } else {
      console.error('Paquete no encontrado');
    }
  }

  formatDateForInput(dateString: string | undefined): string | null {
    if (!dateString) return null;

    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Convierte la fecha al formato 'YYYY-MM-DD'
  }

  updPaquete() {
    if (!this.paqueteId) {
      console.error('ID de Paquete no definido');
      return;
    }

    const paqueteData = {
      nombrePaquete: this.updFormGroup.get('nombrePaquete')?.value,
      descripcion: this.updFormGroup.get('descripcion')?.value,
      categoria: this.updFormGroup.get('categoria')?.value,
      costo: this.updFormGroup.get('costo')?.value,
      fechas: this.formatDateForServer(this.updFormGroup.get('fechas')?.value),
      tipo: this.updFormGroup.get('tipo')?.value,
      imageUrl: this.updFormGroup.get('imageUrl')?.value || ''
    };

    this.http.patch(`http://localhost:3000/Paquetes/${this.paqueteId}`, paqueteData)
      .subscribe(response => {
        console.log('Paquete actualizado:', response);
        window.location.reload(); // Recargar la página después de eliminar
      }, error => {
        console.error('Error al actualizar el Paquete:', error);
      });
  }

  formatDateForServer(dateString: string | undefined): string | null {
    if (!dateString) return null;

    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Convierte la fecha al formato 'YYYY-MM-DD'
  }
}
