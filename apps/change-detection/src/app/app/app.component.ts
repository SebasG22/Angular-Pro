import { Component } from '@angular/core';

@Component({
  selector: 'angpro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user: any = {
    name: 'Sebastián Guevara',
    age: 22,
    location: 'Bogotá, CO'
  }
}
