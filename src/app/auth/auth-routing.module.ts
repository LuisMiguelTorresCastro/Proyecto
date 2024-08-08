import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegAgenciaComponent } from './pages.adm/regAgencia/regAgencia.component';
import { AdmComponent } from './pages.adm/adm/adm.component';

const routes: Routes = [
  {
    path:'',
    component: AdmComponent,
    children: [
      { path: 'regAgencia', component: RegAgenciaComponent },
      { path: 'edit', component: RegAgenciaComponent },
      { path: '**',redirectTo: 'adm'}
     ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
