import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { Observable } from "rxjs";

@Injectable()
export class DataServices{


    constructor (private httpClient:HttpClient){}

    guardarEmpleados(empleados:Empleado[]){
        this.httpClient.put('https://miprimerproyecto-4105a-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(empleados=>{
            console.log(empleados)
          });
    
    }
}