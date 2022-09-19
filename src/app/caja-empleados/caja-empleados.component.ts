import { Component,Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-caja-empleados',
  templateUrl: './caja-empleados.component.html',
  styleUrls: ['./caja-empleados.component.css']
})
export class CajaEmpleadosComponent implements OnInit {
  //Vas a recibir dos datos de tu pare que son EMPLEADO Y INDICE PARA ESO USAMOS LA DIRECTIVA IMPUT
 
  @Input() empleadoLista:Empleado
  @Input() indice:Number


  constructor() { }

  ngOnInit(): void {
  }

}
