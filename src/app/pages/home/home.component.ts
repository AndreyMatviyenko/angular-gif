import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle',
  template: `
    <header class="home-header">
        <h1 class="h1 title">Gif Battle!</h1>
        <p>
            Funny Angular App!
        </p>
        <a routerLink="battle" class="button">Let's play!<i class="fa fa-play"></i></a>
    </header>
  `,
  styles: [``]
})
export class HomeComponent implements OnInit {


  constructor( ) { }

  ngOnInit() {
  }


}
