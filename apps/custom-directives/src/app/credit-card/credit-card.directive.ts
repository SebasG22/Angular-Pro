import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[angproCreditCard]'
})
export class CreditCardDirective {
    constructor(private element: ElementRef) {
        console.log(this.element);
    }
}