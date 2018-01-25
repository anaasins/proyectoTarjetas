import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Label]'
})

export class LabelDirective{
  constructor(el:ElementRef){
    el.nativeElement.style.fontSize = '20px';
    el.nativeElement.style.color = 'black';
    el.nativeElement.style.fontWeight = 'bold';
  }
}
