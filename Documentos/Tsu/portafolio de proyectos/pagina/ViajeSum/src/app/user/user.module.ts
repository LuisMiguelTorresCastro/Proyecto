import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterCliComponent } from './pages/registerCli/register';
import { LoginCliComponent } from './pages/loginCli/login';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    RegisterCliComponent,
    LoginCliComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    UserRoutingModule
  ],
})
export class UserModule { }
