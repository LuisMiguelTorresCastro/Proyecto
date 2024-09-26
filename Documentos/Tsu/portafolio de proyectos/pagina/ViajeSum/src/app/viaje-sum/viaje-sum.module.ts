import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ViajeSumRoutingModule } from './viaje-sum-routing.module';
import { ViajeSumPageComponent } from './pages/viaje-sum-page/viaje-sum-page.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { AgenciasComponent } from './pages/agencias/agencias.component';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';
import { HotelesComponent } from './pages/hoteles/hoteles.component';
import { RestaurantesComponent } from './pages/restaurantes/restaurantes.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './navbar/navbar.component';
import { GuiasComponent } from './pages/guias/guias.component';
import { TransportistasComponent } from './pages/transportistas/transportistas.component';

@NgModule({
  declarations: [
    ViajeSumPageComponent,
    InicioComponent,
    PaquetesComponent,
    AgenciasComponent,
    ExperienciasComponent,
    HotelesComponent,
    RestaurantesComponent,
    NavBarComponent,
    GuiasComponent,
    TransportistasComponent
  ],
  imports: [
    CommonModule,
    ViajeSumRoutingModule,
    MaterialModule,
  ],
  exports: [RouterModule]
})
export class ViajeSumModule { }

