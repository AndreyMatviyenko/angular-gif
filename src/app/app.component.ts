import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <main class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">

          <flash-messages></flash-messages>
          <router-outlet></router-outlet>
        </div>
      </div>
    </main>

    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
