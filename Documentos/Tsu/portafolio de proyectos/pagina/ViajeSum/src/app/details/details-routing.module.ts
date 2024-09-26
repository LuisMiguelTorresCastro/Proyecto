import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from '../viaje-sum/navbar/navbar.component';
import { DetallesExperienciaComponent } from './pages/detailsexp/detailsexp.component';
import { DetallesPaqueteComponent } from './pages/detailspaq/detailspaq.component';

const routes: Routes = [
  { 
    path: '', 
    component: NavBarComponent, 
    children: [
      { path: 'detallesexp/:id/:type', component: DetallesExperienciaComponent },
      { path: 'detallespaq/:id/:type', component: DetallesPaqueteComponent },
      { path: '**', redirectTo: '/detalles' } 
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
