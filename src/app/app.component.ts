import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from './cargar-scripts.service';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' , '../assets/nicepage.css']
})
export class AppComponent implements OnInit{
  title = 'DPE';
  
  datarray: any [] =[];
  dataobj : any = {};

 
  constructor(public apiService: ApiService, nicepage:CargarScriptsService, jquery:CargarScriptsService, imprimir:CargarScriptsService ){
    jquery.carga(['jquery']) , nicepage.carga(['nicepage']), imprimir.carga(['qr']);}

    ngOnInit(): void {
      this.llenarData();
      this.llenarData2();
    }
  
    llenarData(){
      this.apiService.getData().subscribe(datarray =>{
        this.datarray = datarray;
        console.log(this.datarray);
      })
    }

    llenarData2(){
      this.apiService.getData().subscribe(dataobj =>{
        this.dataobj = dataobj;
        console.log(this.dataobj);
      })
    }
  }
