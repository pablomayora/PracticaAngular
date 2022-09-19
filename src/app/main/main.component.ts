import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

Nombre="fewfwefewfew";
TextoDeRegistro="No hay nadie Registrado"


UsuarioRegistrado(event:Event){
  
 if((<HTMLInputElement>event.target).value=="SI"){this.TextoDeRegistro="El Usuario se acaba de Registrar FELICIDADES"}
 else{this.TextoDeRegistro="No hay nadie Registrado"}
}

empleados:Empleado[]=[


  new Empleado("Juan","Montoya","Presidente",80000),
  new Empleado("Polo","Mayora","Gerente",8000),
  new Empleado("Jose","Piclos","Operador",800),
  new Empleado("Miguel","Rechoncho","Asistente",80)

];

CuadroNombre:string="";
CuadroApellido:string="";
CuadroCargo:string="";
CuadroSalario:number=0;

AgregarEmpleado(){
  let miEmpleado=new Empleado(this.CuadroNombre,this.CuadroApellido,this.CuadroCargo,this.CuadroSalario);
  this.miServicio.MuestraMensaje("Nombre"+ miEmpleado.nombre)
  this.empleados.push(miEmpleado)
}



  constructor(private miServicio:ServicioEmpleadosService) {

   }

  ngOnInit(): void {
  }

}
