import { createInjectableType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minicalculadora',
  templateUrl: './minicalculadora.component.html',
  styleUrls: ['./minicalculadora.component.css']
})
export class MinicalculadoraComponent implements OnInit {
  titlle= " Mini Calculadora"
 
  numero1:string="0";
  numero2:string="0";
  numero3:string="0";
  numero4:string="0";
  resultado:number=0;
  mostrar=false
  
  
  sumar():void{
    this.resultado= parseInt(this.numero1)+parseInt(this.numero2)+parseInt(this.numero3)+parseInt(this.numero4);
    this.MuestraResultado();
  }
  restar():void{
    this.resultado=parseInt(this.numero1)-parseInt(this.numero2)-parseInt(this.numero3)-parseInt(this.numero4)
    this.MuestraResultado();
  }

  multiplicar():void{
    this.resultado=parseInt(this.numero1)*parseInt(this.numero2)*parseInt(this.numero3)*parseInt(this.numero4)
    this.MuestraResultado();
  }


  
  MuestraResultado(){
    this.mostrar=true  
  }


  constructor() { }

  ngOnInit(): void {
  }

}
