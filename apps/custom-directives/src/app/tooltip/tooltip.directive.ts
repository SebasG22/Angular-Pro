import { Directive, Input, ElementRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
    selector: '[angproTooltip]',
    exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {
    tooltipElement = document.createElement('div');
    visible = false;

    @Input() public value = 'Not value';


    setTooltip(value) {
        this.tooltipElement.textContent = value;
    }

    hide() {
        this.tooltipElement.classList.remove('tooltip--active');
    }

    show() {
        this.tooltipElement.classList.add('tooltip--active');
    }

    constructor(
        private element: ElementRef,
        private view: ViewContainerRef
    ) { }

    ngOnInit() {
        this.setTooltip(this.value);
        this.tooltipElement.className = 'tooltip';
        this.element.nativeElement.appendChild(this.tooltipElement);
        this.element.nativeElement.classList.add('tooltip-container');
    }

}