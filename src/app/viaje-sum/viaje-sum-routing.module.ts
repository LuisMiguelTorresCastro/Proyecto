import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { AgenciasComponent } from './pages/agencias/agencias.component';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';
import { HotelesComponent } from './pages/hoteles/hoteles.component';
import { RestaurantesComponent } from './pages/restaurantes/restaurantes.component';
import { AdmComponent } from '../auth/pages.adm/adm/adm.component';
import { NavBarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: NavBarComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'paquetes', component: PaquetesComponent },
      { path: 'agencias', component: AgenciasComponent },
      { path: 'experiencias', component: ExperienciasComponent },
      { path: 'hoteles', component: HotelesComponent },
      { path: 'restaurantes', component: RestaurantesComponent },
      { path: 'adm', component: AdmComponent },
      { path: '**', redirectTo: 'inicio' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViajeSumRoutingModule { }
