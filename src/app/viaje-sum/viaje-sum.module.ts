import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ViajeSumRoutingModule } from './viaje-sum-routing.module';
import { ViajeSumPageComponent } from './pages/viaje-sum-page/viaje-sum-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { AgenciasComponent } from './pages/agencias/agencias.component';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';
import { HotelesComponent } from './pages/hoteles/hoteles.component';
import { RestaurantesComponent } from './pages/restaurantes/restaurantes.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    ViajeSumPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    InicioComponent,
    PaquetesComponent,
    AgenciasComponent,
    ExperienciasComponent,
    HotelesComponent,
    RestaurantesComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    ViajeSumRoutingModule,
    MaterialModule,
  ],
  exports: [RouterModule]
})
export class ViajeSumModule { }

