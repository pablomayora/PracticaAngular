import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { empleadosServicie } from '../empleado.servicie';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-actualizador',
  templateUrl: './actualizador.component.html',
  styleUrls: ['./actualizador.component.css']
})
export class ActualizadorComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute , private empleadosServicie:empleadosServicie) { }
  empleados:Empleado[]=[];
  
  CuadroNombre:string="";
  CuadroApellido:string="";
  CuadroCargo:string="";
  CuadroSalario:number=0;
  indice:number;
  
  AgregarEmpleado(){
    let miEmpleado=new Empleado(this.CuadroNombre,this.CuadroApellido,this.CuadroCargo,this.CuadroSalario);
    
    this.empleados.push(miEmpleado)
  }
  volverHome(){
    this.router.navigate([""])
  }
  

  ActualizarEmpleado(){
    let miEmpleado=new Empleado(this.CuadroNombre,this.CuadroApellido,this.CuadroCargo,this.CuadroSalario)
    this.empleadosServicie.actualizaEmpleado(this.indice, miEmpleado);
   

  }
  


  

  ngOnInit(): void {
    this.empleados=this.empleadosServicie.empleados;
    this.indice=this.route.snapshot.params['id'];
    let empleado:Empleado= this.empleadosServicie.encontrarEmpleado(this.indice);

    this.CuadroNombre=empleado.nombre;
    this.CuadroApellido=empleado.apellido;
    this.CuadroCargo=empleado.cargo;
    this.CuadroSalario=empleado.salario;

    

  }

}
