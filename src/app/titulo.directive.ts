import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Titulo]'
})

export class TituloDirective{
  constructor(el:ElementRef){
    el.nativeElement.style.fontSize = '70px';
    el.nativeElement.style.color = '#01aef2';
    el.nativeElement.style.textAlign = 'center';
  }
}
