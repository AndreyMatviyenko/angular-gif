import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle',
  template: `
    <main class="hero is-fullheight">
      <div class="hero-body hero-home">
        <div class="container">
          <section class="home-header">
              <h1 class="h1 title">Gif Battle!</h1>
              <p>
                  Funny Angular App!
              </p>
              <a routerLink="battle" class="button">Let's play!<i class="fa fa-play"></i></a>
          </section>
        </div>
      </div>
    </main>
  `,
  styles: [``]
})
export class HomeComponent implements OnInit {


  constructor( ) { }

  ngOnInit() {
  }


}
