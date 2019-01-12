import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[myTextHighlight]'
})
export class TextHighLightDirective {

  constructor(private elementRef: ElementRef) {
    // this.elementRef;
    // angular object wrapper around dom element
    const nativeElement = this.elementRef.nativeElement;
    nativeElement.style.backgroundColor = 'yellow';

    console.log('TextHighLightDirective is called');
  }
}



