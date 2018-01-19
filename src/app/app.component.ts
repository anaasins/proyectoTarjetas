import { Component } from '@angular/core';

@Component({
  selector: 'tarjetas',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nombre:string = 'Antonio Lopez';
  profesion:string='Web developer';
  telefono:number = 666987123;
  correo:string = "pedro@gmail.com";
  git:string = "github.com/pedrolopez";
  direccion:string = "C/Mayor, 59";
}
