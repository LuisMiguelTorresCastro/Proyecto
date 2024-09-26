import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegAgenciaComponent } from './pages.adm/Agencia/regAgencia/regAgencia.component';
import { AdmComponent } from './pages.adm/adm/adm.component';
import { InicioComponent } from '../viaje-sum/pages/inicio/inicio.component';
import { DelAgenciaComponent } from './pages.adm/Agencia/delAgencia/delAgencia.component';
import { UpdAgenciaComponent } from './pages.adm/Agencia/updAgencia/updAgencia.component';
import { RegHotelComponent } from './pages.adm/Hotel/regHotel/regHotel.component';
import { UpdHotelComponent } from './pages.adm/Hotel/updHotel/updHotel.component';
import { DelHotelComponent } from './pages.adm/Hotel/delHotel/delHotel.component';
import { RegRestauranteComponent } from './pages.adm/Restaurante/regRestaurante/regRestaurante.component';
import { UpdRestauranteComponent } from './pages.adm/Restaurante/updRestaurante/updRestaurante.component';
import { DelRestauranteComponent } from './pages.adm/Restaurante/delRestaurante/delRestaurante.component';
import { DelPaquetespersonalizadosComponent } from './pages.adm/PaquetesPersonalizados/delPaquetespersonalizados/delPaquetespersonalizados.component';
import { RegPaquetespersonalizadosComponent } from './pages.adm/PaquetesPersonalizados/regPaquetespersonalizados/regPaquetespersonalizados.component';
import { UpdPaquetespersonalizadosComponent } from './pages.adm/PaquetesPersonalizados/updPaquetespersonalizados/updPaquetespersonalizados.component';
import { UpdExperienciasComponent } from './pages.adm/Experiencias/updExperiencias/updExperiencias.component';
import { DelExperienciasComponent } from './pages.adm/Experiencias/delExperiencias/delExperiencias.component';
import { RegPaqueteComponent } from './pages.adm/Paquetes/regPaquetes/regPaquete.component';
import { UpdPaqueteComponent } from './pages.adm/Paquetes/updPaquetes/updPaquete.component';
import { DelPaqueteComponent } from './pages.adm/Paquetes/delPaquetes/delPaquete.component';
import { RegExperienciasComponent } from './pages.adm/Experiencias/regExperiencias/regExperiencias.component';
import { RegTransportistaComponent } from './pages.adm/Transportista/regTransportista/regTransportista.component';
import { RegGuiasComponent } from './pages.adm/Guia/regGuia/regGuia.component';
import { UpdGuiasComponent } from './pages.adm/Guia/updGuia/updGuias.component';
import { DelGuiasComponent } from './pages.adm/Guia/delGuia/delGuia.component';
import { UpdTransportistaComponent } from './pages.adm/Transportista/updTransportista/updTransportista.component';
import { DelTransportistaComponent } from './pages.adm/Transportista/delTransportista/delTransportista.component';


const routes: Routes = [
  {
    path:'',
    component: AdmComponent,
    children: [
      { path: 'registro', component: RegAgenciaComponent },
      { path: 'edit', component: UpdAgenciaComponent },
      { path: 'eliminar', component: DelAgenciaComponent },

      { path: 'registroh', component: RegHotelComponent },
      { path: 'edith', component: UpdHotelComponent },
      { path: 'eliminarh', component: DelHotelComponent },

      { path: 'registror', component: RegRestauranteComponent },
      { path: 'editr', component: UpdRestauranteComponent },
      { path: 'eliminarr', component: DelRestauranteComponent },

      { path: 'registropp', component: RegPaquetespersonalizadosComponent },
      { path: 'editpp', component: UpdPaquetespersonalizadosComponent },
      { path: 'eliminarpp', component: DelPaquetespersonalizadosComponent },

      { path: 'registroe', component: RegExperienciasComponent },
      { path: 'edite', component: UpdExperienciasComponent },
      { path: 'eliminare', component: DelExperienciasComponent },

      { path: 'registrop', component: RegPaqueteComponent },
      { path: 'editp', component: UpdPaqueteComponent },
      { path: 'eliminarp', component: DelPaqueteComponent },

      { path: 'registrot', component: RegTransportistaComponent },
      { path: 'editt', component: UpdTransportistaComponent },
      { path: 'eliminart', component: DelTransportistaComponent },

      { path: 'registrog', component: RegGuiasComponent },
      { path: 'editg', component: UpdGuiasComponent },
      { path: 'eliminarg', component: DelGuiasComponent },

      { path: 'inicio', component: InicioComponent },
      { path: '**',redirectTo: 'adm'}
     ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
