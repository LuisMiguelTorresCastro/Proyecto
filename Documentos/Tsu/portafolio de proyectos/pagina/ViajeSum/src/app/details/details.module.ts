import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { DetailsRoutingModule } from './details-routing.module';
import { DetallesPaqueteComponent } from './pages/detailspaq/detailspaq.component';
import { DetallesExperienciaComponent } from './pages/detailsexp/detailsexp.component';
@NgModule({
  declarations: [
    DetallesPaqueteComponent,
    DetallesExperienciaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    DetailsRoutingModule
  ],
})
export class DetailsModule { }
