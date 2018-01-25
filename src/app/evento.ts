import {Directive} from '@angular/core';
@Directive({
  selector: '[MiEvento]',
  host:{
    '(click)':'textoBoton()',
  }
})
export class MiEvento{
  varVisible:number = 1;

  textoBoton(){
    if(this.varVisible == 1){
      this.varVisible = 0
      document.getElementById('boton').innerHTML = 'MOSTRAR FORMULARIO';
    }else{
      this.varVisible = 1;
      document.getElementById('boton').innerHTML = 'OCULTAR FORMULARIO';
    }
  }
}
