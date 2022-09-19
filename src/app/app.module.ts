import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { MainComponent } from './main/main.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { MinicalculadoraComponent } from './minicalculadora/minicalculadora.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { CajaEmpleadosComponent } from './caja-empleados/caja-empleados.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    MainComponent,
    ButtonComponent,
    MinicalculadoraComponent,
    DirectivasComponent,
  
    CajaEmpleadosComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [ServicioEmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
