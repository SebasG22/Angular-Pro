import { Component } from '@angular/core';

@Component({
  selector: 'angpro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = [{
    name: 'Sebastián Guevara',
    age: 22,
    location: 'Bogotá, DC'
  },
  {
    name: 'Stefany Mojica',
    age: 20,
    location: 'Valledupar'
  }]

  constructor() {
    setTimeout(() => {
      this.items = [...this.items, {
        name: 'Matt Skiba',
        age: 21,
        location: 'California'
      }]
    }, 2000);
  }
}
