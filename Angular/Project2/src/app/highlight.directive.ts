import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(elem: ElementRef) { 
    elem.nativeElement.style.backgroundColor = 'teal';
    elem.nativeElement.style.color = 'white';
    elem.nativeElement.style.width = '20%';
  }

}
