import { Component, OnInit } from '@angular/core';
import {interval, Subject } from "rxjs";
@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  cronometro = "00 : 00 : 00";
  segundos: Number  = 0;
  minutos: Number | String = 0;
  horas : Number | String = 0; 

  iterar 
  constructor() { }

  ngOnInit() {
    
    
  }

  empezar(){

    this.iterar = setInterval(()=>{
      this.timer(1);
    }, 1000)
  
  }

  pausar(){
    clearInterval(this.iterar);
  }

  finalizar(){
    clearInterval(this.iterar);
    this.cronometro = "00 : 00 : 00";
  }

  timer(numero){
    this.segundos = this.segundos + numero;

    console.log(this.segundos);

    if(this.segundos == 60){
      this.segundos = 0;
      this.minutos = this.minutos + numero;

      if(this.minutos == 60){
        this.minutos = 0;
        this.horas = this.horas + numero;
      }
       
    }
    let timer = (this.horas < 10? '0'+this.horas :  this.horas ) +" : "+ (this.minutos< 10? '0'+this.minutos : this.minutos) +" : " + (this.segundos<10? '0'+this.segundos : this.segundos) 
    this.cronometro = timer;
    console.log(this.cronometro);
  }

}
