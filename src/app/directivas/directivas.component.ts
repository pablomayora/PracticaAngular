import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  titulo= "Registro de Usuario";
  mensaje="";
  Registrado=false;
  nombre:string=""
  apellido:string="";
  cargo:string="";
  entradas:any;






  registrar(){
    this.Registrado=true
    this.mensaje=`Usuario  ${this.nombre} ${this.apellido}  Registrado con Exito`
  }






  constructor() {
    this.entradas=[
      {titulo:"Agragando entradas para usar la Directiva ngForm 1"},
      {titulo:"Agragando entradas para usar la Directiva ngForm 2"},
      {titulo:"Agragando entradas para usar la Directiva ngForm 3"},
      {titulo:"Agragando entradas para usar la Directiva ngForm 4"}

    ]

   }

  ngOnInit(): void {
  }

}
