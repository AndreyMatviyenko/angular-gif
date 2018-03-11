import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle',
  template: `
    <main class="hero is-white">
      <div class="hero-body hero-login">
        <div class="stripe-background"></div>
        <div class="container">
          <section class="login-header has-text-centered">
              <h1 class="h1 title is-2">Контакты</h1>
              <p>Для связи с администрацией сайта воспользуйтесь формой на данной странице</p>
          </section>
        </div>
      </div>
    </main>
  `,
  styles: [``]
})
export class ContactComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
