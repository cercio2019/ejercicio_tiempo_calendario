import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";
@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

  reloj: String | Date = "" 

  constructor() { 
    
  }

  ngOnInit() {
    const iterar = interval(1000);

    iterar.subscribe(()=>{
      this.relojDigital();
    })
  }


  relojDigital(){

    let tiempo = new Date();
    
    let hora = tiempo.getHours();
    let minutos = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();
    let zona = ""
    let contadorMinutos: String | Number = ""
    let contadorSegundos: String | Number = ""

    if(hora > 12){
      zona = "PM";
      hora = hora-12;
    }else{
      zona = "AM";
    }

    if(minutos < 10){
      contadorMinutos = "0"+minutos;
    }else{
      contadorMinutos = minutos;
    }

    if(segundos<10){
      contadorSegundos = "0"+segundos;
    }else{
      contadorSegundos = segundos;
    }

    this.reloj = `${hora} : ${contadorMinutos} : ${contadorSegundos}  ${zona}  `;

  }

}
