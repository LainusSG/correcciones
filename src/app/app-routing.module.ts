import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BIENVENIDAComponent } from './bienvenida/bienvenida.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { RECONOCIMIENTOFACIALComponent } from './reconocimiento-facial/reconocimiento-facial.component';
import { AuthGuard } from './links.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Bienvenida2Component } from './bienvenida-2/bienvenida-2.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
//-------------------------------------------------------------------------------------------- modulo 1 quirofano

import { DATOSDEPROGRAMACIONComponent } from './modulo1-quirofano/datos-de-programacion/datos-de-programacion.component';
import { PROGRAMACIONDECIRUGIAComponent } from './modulo1-quirofano/programacion-de-cirugia/programacion-de-cirugia.component';
import { REGISTRODEPAQUETESComponent } from './modulo1-quirofano/registro-de-paquetes/registro-de-paquetes.component';

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
import { Home2Component } from './home-2/home-2.component';







const routes: Routes = [
//------------------login--------------------- modulo 0
  { path: '', redirectTo: 'login', pathMatch: 'full' },   // Main redirect
  {
      path: '',
      children: [
          { path: 'login', component: LoginComponent},
          { path: "Register", component: RegisterComponent},
          { path: 'Reconocimiento-Facial', component: RECONOCIMIENTOFACIALComponent },
          { path: 'bienvenida', component:BIENVENIDAComponent },
          { path: 'bienvenida-quirofano', component: Bienvenida2Component}
                ]
  },
//------------------programacion de cirugia--------------------- modulo 1
  {
    path: '',
    component: Home2Component,
    children: [
      { path: 'Programacion-De-Cirugia', component: PROGRAMACIONDECIRUGIAComponent },
      { path: 'Registro-De-Paquetes', component: REGISTRODEPAQUETESComponent },
      { path: 'Datos-De-Programacion', component: DATOSDEPROGRAMACIONComponent },  
              ]
},
  
//------------------Recepcion--------------------- modulo 2
{
  path: '',
  component: HomeComponent,
  children: [
    { path: 'recepcion-incidencias', component:IncidenciasComponent},
    { path: 'material-de-quirofano-recepcion', component:MaterialDeQuirofanoComponent},
    { path: 'otras-unidades-hospitalarias', component:OtrasUnidadesHospitalariasComponent},
    { path: 'provedor-externo', component:ProvedorExternoComponent},
    { path: 'recepcion', component:RecepcionComponent},
    { path: 'recepcion-otras', component:RecepcionOtrasComponent},
    { path: 'recepcion-otras-2', component:RecepcionOtras2Component},
    { path: 'recepcion-provedor-externo', component:RecepcionProvedorExternoComponent},
            ]
},

//------------------Lavado--------------------- modulo 3
{
  path: '',
  component: HomeComponent,
  children: [
    { path: 'lavado', component:LavadoComponent},
    { path: 'lavado-2', component:LavadoOpc2Component},
            ]
},

//------------------Empaque--------------------- modulo 4
{
  path: '',
  component: HomeComponent,
  children: [
    { path: 'empaquetado-otros', component:EmpaquetadoOtrosComponent},
    { path: 'empaquetado-set', component:EmpaquetadoSetComponent},
    { path: 'lectura-QR', component:LecturaDeQrComponent},
    { path: 'material-de-quirofano-y-ceye', component:MaterialDeQuirofanoyCEyEComponent},
    { path: 'otras-areas-y-provedor-externo-empaque', component:OtrasAreasYProvedorExternoComponent},
            ]
},

//------------------Esterilizacion--------------------- modulo 5
{
  path: '',
  component: HomeComponent,
  children: [
    { path: 'esterilizacion-2', component:Esterilizacion2Component},
    { path: 'esterilizacion', component:EsterilizacionNoComponent},
  ]
},

//------------------almacenamiento--------------------- modulo 6
{
  path: '',
  component: HomeComponent,
  children: [
    { path: 'almacen-general', component:AlmacenGeneralComponent},
    { path: 'recepcion-almacen', component:RecepcionAlmacenComponent},
            ]
},

//------------------distribucion--------------------- modulo 7
{
  path: '',
  component: HomeComponent,
  children: [
    { path: 'distribucion-otras', component:DistribucionOtrasComponent},
    { path: 'distribucion-material-QX', component:DitribucionMaterialQxComponent},
    { path: 'material-de-quirofano-distribucion', component:MaterialDeQuirofanoDistribucionComponent},
    { path: 'otras-areas-y-proveedor-externo-distribucion', component:OtrasAreasYProveedorYExternoComponent},
    { path: 'prestamo-otras', component:PrestamoOtrasComponent},
            ]
},

//------------------administracion--------------------- modulo 8
{
  path: '',
  component: HomeAdminComponent,
  children: [
    { path: 'dashboard', component:AdminDashboardComponent},
    { path: 'alta-de-instrumental', component:AltaDeInstrumentalComponent},
    { path: 'alta-de-instrumental-h', component:AltaDeInstrumentalHComponent},
    { path: 'cotrol-de-usuarios', component:ControlUsuariosComponent},
    { path: 'datos-esterilizador', component:DatosEsterilizadorComponent},
    { path: 'datos-lavadoras', component:DatosLavadorasComponent},
    { path: 'incidencias-administrador', component:InsidenciaComponent},
    { path: 'permisos-de-usuarios', component:PermisosUsuariosComponent},
            ]
},

//------------------Modulo libre gard--------------------- modulo null

    {
      path: '',
      canActivate: [AuthGuard],
      component: BIENVENIDAComponent,
      children: [
       
        
      ]
  }
  
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
