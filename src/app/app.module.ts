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
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import {RouterModule,Routes} from '@angular/router';
import { ActualizadorComponent } from './actualizador/actualizador.component'
import { DataServices } from './data.servicie';
import {HttpClientModule} from '@angular/common/http'


const appRoutes:Routes=[
  //{path:'', component:HomeComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'quienes', component:QuienesComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'actualiza/:id', component:ActualizadorComponent}




]

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    MainComponent,
    ButtonComponent,
    MinicalculadoraComponent,
    DirectivasComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesComponent,
    CajaEmpleadosComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesComponent,
    ContactoComponent,
    ActualizadorComponent
],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [ServicioEmpleadosService,DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
