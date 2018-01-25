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
  nacimiento:Array<Number> = [];
  contador:number = 0;
  anyo:number = 1980;
  fechaFinal:number = 1981;
  varVisible:number = 1;

constructor(){
 for(this.contador=0; this.contador<20; this.contador++){
   this.anyo ++;
   this.nacimiento[this.contador] = this.anyo ;
 }
}

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
    }else if(campo == "nacimiento"){
      this.fechaFinal = event.target.value;
    }
  }

  visibilidad(){
    if(this.varVisible == 1){
      this.varVisible = 0
    }else{
      this.varVisible = 1;
    }
  }
}
