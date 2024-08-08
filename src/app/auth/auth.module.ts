import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { RegAgenciaComponent } from './pages.adm/regAgencia/regAgencia.component';
import { CardComponent } from './components/card/card.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { AdmComponent } from './pages.adm/adm/adm.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [

    RegAgenciaComponent,
    CardComponent,
    ConfirmDialogComponent,
    AdmComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
})
export class AuthModule { }
