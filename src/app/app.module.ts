import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BIENVENIDAComponent } from './bienvenida/bienvenida.component';
import { CargarScriptsService } from './cargar-scripts.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

//----------------------------------------------------------------------------------------- login

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RECONOCIMIENTOFACIALComponent } from './reconocimiento-facial/reconocimiento-facial.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home-2/home-2.component';
import { Bienvenida2Component } from './bienvenida-2/bienvenida-2.component';
//-------------------------------------------------------------------------------------------- modulo 1 quirofano

import { PROGRAMACIONDECIRUGIAComponent } from './modulo1-quirofano/programacion-de-cirugia/programacion-de-cirugia.component';
import { REGISTRODEPAQUETESComponent } from './modulo1-quirofano/registro-de-paquetes/registro-de-paquetes.component';
import { DATOSDEPROGRAMACIONComponent } from './modulo1-quirofano/datos-de-programacion/datos-de-programacion.component';
//-------------------------------------------------------------------------------------------- modulo 2 recepcion 

import { IncidenciasComponent } from './modulo2-recepcion/incidencias/incidencias.component';
import { MaterialDeQuirofanoComponent } from './modulo2-recepcion/material-de-quirofano/material-de-quirofano.component';
import { OtrasUnidadesHospitalariasComponent } from './modulo2-recepcion/otras-unidades-hospitalarias/otras-unidades-hospitalarias.component';
import { ProvedorExternoComponent } from './modulo2-recepcion/provedor-externo/provedor-externo.component';
import { RecepcionComponent } from './modulo2-recepcion/recepcion/recepcion.component';
import { RecepcionOtras2Component } from './modulo2-recepcion/recepcion-otras-2/recepcion-otras-2.component';
import { RecepcionOtrasComponent } from './modulo2-recepcion/recepcion-otras/recepcion-otras.component';
import { RecepcionProvedorExternoComponent } from './modulo2-recepcion/recepcion-provedor-externo/recepcion-provedor-externo.component';

//-------------------------------------------------------------------------------------------- modulo 3 lavado 

import { LavadoComponent } from './modulo3-lavado/lavado/lavado.component';
import { LavadoOpc2Component } from './modulo3-lavado/lavado-opc2/lavado-opc2.component';

//-------------------------------------------------------------------------------------------- modulo 4 empaque

import { EmpaquetadoOtrosComponent } from './modulo4-empaque/empaquetado-otros/empaquetado-otros.component';
import { EmpaquetadoSetComponent } from './modulo4-empaque/empaquetado-set/empaquetado-set.component';
import { LecturaDeQrComponent } from './modulo4-empaque/lectura-de-qr/lectura-de-qr.component';
import { MaterialDeQuirofanoyCEyEComponent } from './modulo4-empaque/material-de-quirofanoy-cey-e/material-de-quirofanoy-cey-e.component';
import { OtrasAreasYProvedorExternoComponent } from './modulo4-empaque/otras-areas-y-provedor-externo/otras-areas-y-provedor-externo.component';

//-------------------------------------------------------------------------------------------- modulo 5 esterilizacion

import { Esterilizacion2Component } from './modulo5-esterilizacion/esterilizacion-2/esterilizacion-2.component';
import { EsterilizacionNoComponent } from './modulo5-esterilizacion/esterilizacion-no/esterilizacion-no.component';

//-------------------------------------------------------------------------------------------- modulo 6 almacenamiento

import { AlmacenGeneralComponent } from './modulo6-almacenamiento/almacen-general/almacen-general.component';
import { RecepcionAlmacenComponent } from './modulo6-almacenamiento/recepcion-almacen/recepcion-almacen.component';

//-------------------------------------------------------------------------------------------- modulo 7 distribucion 

import { DistribucionOtrasComponent } from './modulo7-distribucion/distribucion-otras/distribucion-otras.component';
import { DitribucionMaterialQxComponent } from './modulo7-distribucion/ditribucion-material-qx/ditribucion-material-qx.component';
import { MaterialDeQuirofanoDistribucionComponent } from './modulo7-distribucion/material-de-quirofano-distribucion/material-de-quirofano-distribucion.component';
import { OtrasAreasYProveedorYExternoComponent } from './modulo7-distribucion/otras-areas-y-proveedor-y-externo/otras-areas-y-proveedor-y-externo.component';
import { PrestamoOtrasComponent } from './modulo7-distribucion/prestamo-otras/prestamo-otras.component';

//-------------------------------------------------------------------------------------------- modulo 8 administracion 

import { AdminDashboardComponent } from './modulo8-administracion/admin-dashboard/admin-dashboard.component';
import { AltaDeInstrumentalComponent } from './modulo8-administracion/alta-de-instrumental/alta-de-instrumental.component';
import { AltaDeInstrumentalHComponent } from './modulo8-administracion/alta-de-instrumental-h/alta-de-instrumental-h.component';
import { ControlUsuariosComponent } from './modulo8-administracion/control-usuarios/control-usuarios.component';
import { DatosEsterilizadorComponent } from './modulo8-administracion/datos-esterilizador/datos-esterilizador.component';
import { DatosLavadorasComponent } from './modulo8-administracion/datos-lavadoras/datos-lavadoras.component';
import { InsidenciaComponent } from './modulo8-administracion/insidencia/insidencia.component';
import { PermisosUsuariosComponent } from './modulo8-administracion/permisos-usuarios/permisos-usuarios.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';

//-------------------------------------------------------------------------------------------- modulo 2 recepcion 
//-------------------------------------------------------------------------------------------- modulo 3 lavado 
//-------------------------------------------------------------------------------------------- modulo 4 empaque
//-------------------------------------------------------------------------------------------- modulo 5 esterilizacion
//-------------------------------------------------------------------------------------------- modulo 6 almacenamiento
//-------------------------------------------------------------------------------------------- modulo 7 distribucion 
//-------------------------------------------------------------------------------------------- modulo 8 administracion 



@NgModule({
  declarations: [
    AppComponent,
    BIENVENIDAComponent,
    DATOSDEPROGRAMACIONComponent,
    PROGRAMACIONDECIRUGIAComponent,
    REGISTRODEPAQUETESComponent,
    LoginComponent,
    RegisterComponent,
    RECONOCIMIENTOFACIALComponent,
    HomeComponent,
    MaterialDeQuirofanoComponent,
    RecepcionComponent,
    OtrasUnidadesHospitalariasComponent,
    RecepcionOtrasComponent,
    RecepcionOtras2Component,
    ProvedorExternoComponent,
    IncidenciasComponent,
    RecepcionProvedorExternoComponent,
    LavadoComponent,
    LavadoOpc2Component,
    MaterialDeQuirofanoyCEyEComponent,
    EmpaquetadoSetComponent,
    OtrasAreasYProvedorExternoComponent,
    EmpaquetadoOtrosComponent,
    LecturaDeQrComponent,
    Esterilizacion2Component,
    EsterilizacionNoComponent,
    AlmacenGeneralComponent,
    DitribucionMaterialQxComponent,
    OtrasAreasYProveedorYExternoComponent,
    DistribucionOtrasComponent,
    PrestamoOtrasComponent,
    AdminDashboardComponent,
    AltaDeInstrumentalComponent,
    AltaDeInstrumentalHComponent,
    ControlUsuariosComponent,
    DatosEsterilizadorComponent,
    DatosLavadorasComponent,
    InsidenciaComponent,
    PermisosUsuariosComponent,
    RecepcionAlmacenComponent,
    MaterialDeQuirofanoDistribucionComponent,
    Home2Component,
    Bienvenida2Component,
    HomeAdminComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
   
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
