import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[myFor][myForOf]'
})
export class MyForDirective {

    @Input()
    set myForOf(coll) {
        this.view.clear();
        coll.forEach((item, index) => {
            this.view.createEmbeddedView(this.template, {
                $implicit: item,
                index
            });
        });
    }

    constructor(
        private view: ViewContainerRef,
        private template: TemplateRef<any>
    ) { }
}