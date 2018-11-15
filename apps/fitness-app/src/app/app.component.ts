import { Component } from '@angular/core';

@Component({
  selector: 'angpro-root',
  template: `
  <div>
    Hello Ultimate Angular!
    <div class="wrapper">
      <router-outlet></router-outlet>
    </div>
  </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
