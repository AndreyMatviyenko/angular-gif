import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <flash-messages></flash-messages>
    <router-outlet></router-outlet>

    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
