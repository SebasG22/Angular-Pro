import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'angpro-auth-remember',
    template: `
    <label>
      <input type="checkbox" (change)="onChecked($event.target.checked)">
      Keep me logged in
    </label>
  `
})
export class AuthRememberComponent {

    @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

    onChecked(value: boolean) {
        this.checked.emit(value);
    }

}