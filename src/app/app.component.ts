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
  direccion:string = "C/Mayor, 59";

  actualizar(event){
    var campo = event.target.id;
    if (campo == 'nombre'){
      this.nombre = event.target.value;
    }else if (campo == 'profesion'){
      this.profesion = event.target.value;
    }else if (campo == 'telefono'){
      this.telefono = event.target.value;
    }else if (campo == 'correo'){
      this.correo = event.target.value;
    }else if (campo == 'direccion'){
      this.direccion = event.target.value;
    }

  }
}
