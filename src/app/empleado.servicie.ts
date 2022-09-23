/**Aca escribimos el codigo a dnd consultamos el codigo de la base de datos. Este se creo de forma manual */

import { Injectable } from "@angular/core";
import { DataServices } from "./data.servicie";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { Observable } from "rxjs";



@Injectable()

export class empleadosServicie{
    constructor( private dataServicie:DataServices ){

    }



    empleados:Empleado[]=[


        new Empleado("Juan","Montoya","Presidente",80000),
        new Empleado("Polo","Mayora","Gerente",8000),
        new Empleado("Jose","Piclos","Operador",800),
        new Empleado("Miguel","Rechoncho","Asistente",80)
      
      ];

agregarEmpleadoDelServicio(empleado:Empleado){
    this.empleados.push(empleado);
    this.dataServicie.guardarEmpleados(this.empleados);

}
encontrarEmpleado(indice:number){
    let empleado:Empleado=this.empleados[indice];
    return empleado

}
actualizaEmpleado(indice:number,empleado:Empleado){
    let empleadoModificado=this.empleados[indice];

    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;




}


}