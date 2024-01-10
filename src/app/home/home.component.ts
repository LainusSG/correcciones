import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../assets/nicepage.css']
})
export class HomeComponent  implements OnInit{
 
  datarray: any [] =[];
  dataobj : any = {};

 constructor (private apiService: ApiService){}

  ngOnInit(): void {
    this.llenarData();
  }



  llenarData(){
    this.apiService.getData().subscribe(datarray =>{
      this.datarray = datarray;
      console.log(this.datarray);
    })

  }

  links = [
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
