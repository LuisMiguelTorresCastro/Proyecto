import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from '../viaje-sum/navbar/navbar.component';
import { LoginCliComponent } from './pages/loginCli/login';
import { RegisterCliComponent } from './pages/registerCli/register';


const routes: Routes = [
  {
    path:'',
    component: NavBarComponent,
    children: [
      { path: 'loginCli', component: LoginCliComponent },
      { path: 'registerCli', component: RegisterCliComponent },
      { path: '**',redirectTo: 'user'}
     ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
