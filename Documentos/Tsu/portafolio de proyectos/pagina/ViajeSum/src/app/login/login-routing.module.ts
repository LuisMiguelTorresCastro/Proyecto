import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from '../viaje-sum/navbar/navbar.component';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';


const routes: Routes = [
  {
    path:'',
    component: NavBarComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '**',redirectTo: 'login'}
     ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
