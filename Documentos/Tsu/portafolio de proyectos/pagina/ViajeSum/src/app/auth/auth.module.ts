import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { RegAgenciaComponent } from './pages.adm/Agencia/regAgencia/regAgencia.component';
import { AdmComponent } from './pages.adm/adm/adm.component';
import { HttpClientModule } from '@angular/common/http';
import { RegAgenciaCardComponent } from './pages.adm/Agencia/regAge-card/regAgencia-card.component';
import { UpdAgenciaComponent } from './pages.adm/Agencia/updAgencia/updAgencia.component';
import { DelAgenciaComponent } from './pages.adm/Agencia/delAgencia/delAgencia.component';
import { RegHotelComponent } from './pages.adm/Hotel/regHotel/regHotel.component';
import { UpdHotelComponent } from './pages.adm/Hotel/updHotel/updHotel.component';
import { DelHotelComponent } from './pages.adm/Hotel/delHotel/delHotel.component';
import { RegHotelCardComponent } from './pages.adm/Hotel/regHot-card/regHotel-card.component';
import { RegRestauranteComponent } from './pages.adm/Restaurante/regRestaurante/regRestaurante.component';
import { UpdRestauranteComponent } from './pages.adm/Restaurante/updRestaurante/updRestaurante.component';
import { DelRestauranteComponent } from './pages.adm/Restaurante/delRestaurante/delRestaurante.component';
import { RegRestauranteCardComponent } from './pages.adm/Restaurante/regRes-card/regRes-card.component';
import { DelPaquetespersonalizadosComponent } from './pages.adm/PaquetesPersonalizados/delPaquetespersonalizados/delPaquetespersonalizados.component';
import { RegPaquetespersonalizadosComponent } from './pages.adm/PaquetesPersonalizados/regPaquetespersonalizados/regPaquetespersonalizados.component';
import { RegPaquetePersonalizadoCardComponent } from './pages.adm/PaquetesPersonalizados/regPaP-card/regPaP-card.component';
import { RegExperienciasComponent } from './pages.adm/Experiencias/regExperiencias/regExperiencias.component';
import { UpdPaquetespersonalizadosComponent } from './pages.adm/PaquetesPersonalizados/updPaquetespersonalizados/updPaquetespersonalizados.component';
import { DelExperienciasComponent } from './pages.adm/Experiencias/delExperiencias/delExperiencias.component';
import { RegExperienciasCardComponent } from './pages.adm/Experiencias/regExp-card/regExp-card.component';
import { RegPaqueteComponent } from './pages.adm/Paquetes/regPaquetes/regPaquete.component';
import { UpdPaqueteComponent } from './pages.adm/Paquetes/updPaquetes/updPaquete.component';
import { DelPaqueteComponent } from './pages.adm/Paquetes/delPaquetes/delPaquete.component';
import { RegPaqueteCardComponent } from './pages.adm/Paquetes/regPaq-card/regPaq-card.component';
import { ConfirmDialogAgeComponent } from './pages.adm/Agencia/regAge-confirm-dialog/confirm-dialog-Age.component';
import { ConfirmDialogExpComponent } from './pages.adm/Experiencias/regExp-confirm-dialog/confirm-dialog-Exp.component';
import { ConfirmDialogHotComponent } from './pages.adm/Hotel/regHot-confirm-dialog/confirm-dialog-Hot.component';
import { ConfirmDialogPapComponent } from './pages.adm/PaquetesPersonalizados/regPaP-confirm-dialog/confirm-dialog-Pap.component';
import { ConfirmDialogPaqComponent } from './pages.adm/Paquetes/regPaq-confirm-dialog/confirm-dialog-Paq.component';
import { ConfirmDialogResComponent } from './pages.adm/Restaurante/regRes-confirm-dialog/confirm-dialog-Res.component';
import { RegGuiasComponent } from './pages.adm/Guia/regGuia/regGuia.component';
import { RegTransportistaComponent } from './pages.adm/Transportista/regTransportista/regTransportista.component';
import { ConfirmDialogGuiComponent } from './pages.adm/Guia/regGui-confirm-dialog/confirm-dialog-Gui.component';
import { ConfirmDialogTraComponent } from './pages.adm/Transportista/regTra-confirm-dialog/confirm-dialog-Tra.component';
import { UpdExperienciasComponent } from './pages.adm/Experiencias/updExperiencias/updExperiencias.component';
import { UpdGuiasComponent } from './pages.adm/Guia/updGuia/updGuias.component';
import { DelGuiasComponent } from './pages.adm/Guia/delGuia/delGuia.component';
import { UpdTransportistaComponent } from './pages.adm/Transportista/updTransportista/updTransportista.component';
import { DelTransportistaComponent } from './pages.adm/Transportista/delTransportista/delTransportista.component';

@NgModule({
  declarations: [
    RegAgenciaComponent,
    RegAgenciaCardComponent,
    ConfirmDialogAgeComponent,
    AdmComponent,
    UpdAgenciaComponent,
    DelAgenciaComponent,
    RegHotelComponent,
    UpdHotelComponent,
    DelHotelComponent,
    RegHotelCardComponent,
    RegRestauranteComponent,
    UpdRestauranteComponent,
    DelRestauranteComponent,
    RegRestauranteCardComponent,
    DelPaquetespersonalizadosComponent,
    RegPaquetespersonalizadosComponent,
    UpdPaquetespersonalizadosComponent,
    RegPaquetePersonalizadoCardComponent,
    RegExperienciasComponent,
    DelExperienciasComponent,
    RegExperienciasCardComponent,
    RegPaqueteComponent,
    UpdPaqueteComponent,
    DelPaqueteComponent,
    RegPaqueteCardComponent,
    ConfirmDialogExpComponent,
    ConfirmDialogHotComponent,
    ConfirmDialogPapComponent,
    ConfirmDialogPaqComponent,
    ConfirmDialogResComponent,
    RegGuiasComponent,
    RegTransportistaComponent,
    ConfirmDialogGuiComponent,
    ConfirmDialogTraComponent,
    UpdExperienciasComponent,
    UpdGuiasComponent,
    DelGuiasComponent,
    UpdTransportistaComponent,
    DelTransportistaComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    HttpClientModule,

  ],
})
export class AuthModule { }
