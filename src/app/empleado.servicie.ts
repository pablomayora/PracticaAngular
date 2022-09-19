/**Aca escribimos el codigo a dnd consultamos el codigo de la base de datos. Este se creo de forma manual */

import { Empleado } from "./empleado.model";

export class empleadosServicie{

    empleados:Empleado[]=[


        new Empleado("Juan","Montoya","Presidente",80000),
        new Empleado("Polo","Mayora","Gerente",8000),
        new Empleado("Jose","Piclos","Operador",800),
        new Empleado("Miguel","Rechoncho","Asistente",80)
      
      ];

agregarEmpleadoDelServicio(empleado:Empleado){
    this.empleados.push(empleado)
}

}