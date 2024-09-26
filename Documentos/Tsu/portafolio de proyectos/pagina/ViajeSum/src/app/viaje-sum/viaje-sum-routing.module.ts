import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { AgenciasComponent } from './pages/agencias/agencias.component';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';
import { HotelesComponent } from './pages/hoteles/hoteles.component';
import { RestaurantesComponent } from './pages/restaurantes/restaurantes.component';
import { NavBarComponent } from './navbar/navbar.component';
import { LoginComponent } from '../login/pages/login/login';
import { RegisterComponent } from '../login/pages/register/register';
import { TransportistasComponent } from './pages/transportistas/transportistas.component';
import { GuiasComponent } from './pages/guias/guias.component';
import { LoginCliComponent } from '../user/pages/loginCli/login';
import { RegisterCliComponent } from '../user/pages/registerCli/register';
import { DetallesPaqueteComponent } from '../details/pages/detailspaq/detailspaq.component';
import { DetallesExperienciaComponent } from '../details/pages/detailsexp/detailsexp.component';


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
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'transportista', component: TransportistasComponent },
      { path: 'guias', component: GuiasComponent },
      { path: 'loginCli', component: LoginCliComponent },
      { path: 'registerCli', component: RegisterCliComponent },
      { path: 'detallespaq/:id/:type', component: DetallesPaqueteComponent },
      { path: 'detallesexp/:id/:type', component: DetallesExperienciaComponent },
      { path: '**', redirectTo: 'inicio' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViajeSumRoutingModule { }
