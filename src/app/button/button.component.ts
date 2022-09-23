import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  public myClass:boolean=true
  constructor() { 

  }

  ngOnInit(): void {
  }
  CambioClase(){
    this.myClass=!this.myClass;
    console.log(this.myClass)
  }



}

