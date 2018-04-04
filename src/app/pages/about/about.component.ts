import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle',
  template: `
    <main class="hero">1
      <div class="hero-body hero-login">
        <div class="stripe-background"></div>
        <div class="container">
          <section class="login-header has-text-centered">
              <h1 class="h1 title is-2">О проекте</h1>
          </section>
        </div>
      </div>
    </main>
  `,
  styles: [``]
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
