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

  addProp() {
    this.user.email = 'rlxsebas@gmail.com'
  }

  changeName() {
    this.user.name = "Sebas G"
  }

  changeUser() {
    this.user = {
      name: 'Stefany Mojica',
      age: 18,
      location: 'Valledupar, CO'
    }
  }
}
