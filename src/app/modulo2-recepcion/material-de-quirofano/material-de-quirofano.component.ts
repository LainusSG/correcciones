import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-material-de-quirofano',
  templateUrl: './material-de-quirofano.component.html',
  styleUrls: ['./material-de-quirofano.component.css', '../../../assets/nicepage.css']
})


export class MaterialDeQuirofanoComponent {
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
}
