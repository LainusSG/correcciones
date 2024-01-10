import { Component } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css', '../../assets/nicepage.css']
})
export class HomeAdminComponent {
  links = [
    {
      name: "Programación De Cirugía",
      url: "Programacion-De-Cirugia"
    },
   
    {
      name: "Recepción",
      url: "material-de-quirofano-recepcion"
    },
    {
      name: "Lavado",
      url: "lavado"
    },
    {
      name: "Empaque",
      url: "material-de-quirofano-y-ceye"
    },
    {
      name: "Esterilización",
      url: "esterilizacion"
    },
    {
      name: "Almacenamiento",
      url: "almacen-general"
    },
    {
      name: "Distribución",
      url: "material-de-quirofano-distribucion"
    },

   


    

    
  ]
}

