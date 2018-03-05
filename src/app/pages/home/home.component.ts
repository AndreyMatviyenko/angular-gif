import { Component, OnInit } from '@angular/core';
import { Gif } from '@app/models/gif.model';
import { GifService } from '@app/core/services/gif.service';

@Component({
  selector: 'app-battle',
  template: `
    <main class="hero">
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
    <section class="section section--top">
      <div class="container">
        <h2 class="subtitle">
          Топ 5 лидеров
        </h2>
        <div class="columns" *ngIf="topleaderGifs">
          <div class="column" *ngFor="let gif of topleaderGifs; let i = index">
            <app-gif [url]="gif.url"></app-gif>
          </div>
        </div>
        <p class="has-text-right">
          <a routerLink="leaderboard">Все лидеры</a>
        </p>
      </div>
    </section>
  `,
  styles: [``]
})
export class HomeComponent implements OnInit {
  topleaderGifs: Gif[];


  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.getTopLeader();
  }

  getTopLeader() {
    this.gifService.getTopLeader()
      .subscribe(gifs => this.topleaderGifs = gifs);
  }

}
