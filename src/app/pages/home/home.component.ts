import { Component, OnInit } from '@angular/core';
import { GifService } from '@app/core/services/gif.service';
import { Gif } from '@app/models/gif.model';

@Component({
  selector: 'app-battle',
  template: `
    <main class="hero">
      <div class="hero-body hero-home">
        <!-- <div class="stripe-background"></div> -->
        <div class="container">
          <section class="home-header">
              <h1 class="h1 title">Создавай и участвуй в битве гифок!</h1>
              <p>
                  Не знаешь чем заняться? Скучно? Нужно отвлечься?<br>Добро пожаловать!
              </p>
              <a routerLink="battle" class="button">
                Начать битву!
                <div class="btn-icon"><i class="fa fa-arrow-right"></i></div>
              </a>
          </section>
        </div>
      </div>
    </main>
    <section class="section section--create">
      <h2 class="subtitle">Создай свою гифку!</h2>
      <p>И попробуй попасть в лидеры</p>
      <a routerLink="create"><div class="btn-icon"><i class="fa fa-arrow-right"></i></div></a>
    </section>
    <section class="section section--top">
      <div class="container">
        <h2 class="subtitle has-text-centered">
          Топ 5 лидеров
        </h2>
        <div class="columns" *ngIf="topleaderGifs">
          <div class="column" *ngFor="let gif of topleaderGifs; let i = index">
            <app-gif [url]="gif.url"></app-gif>
          </div>
        </div>
        <p class="has-text-right">
          <a class="button is-link is-rounded" routerLink="leaderboard">Все лидеры →</a>
        </p>
      </div>
    </section>
    <section
      class="section--randomGif">
      <div class="container">
        <div
          class="randomGif__wrap" *ngIf="randomGif"
          [style.background-image]="'url(' + randomGif.url + ')'"
        >
          <div class="randomGif__wrap--content">
            <h2 class="subtitle">Случайная гифка</h2>
            <p>Будет весело... Честно! :)</p>
          </div>
          <a routerLink="create"><div class="btn-icon"><i class="fa fa-arrow-right"></i></div></a>
        </div>
      </div>
    </section>
    <section class="section section--review">
      <div class="container">
        <h2 class="subtitle has-text-centered">
          Отзывы
        </h2>
        <div class="columns">
          <div class="column">
            <div class="review__wrap">
              <span class="pointer-tip"></span>
              <blockquote>
                <p>
                  “I guess what I'm saying is #ShutUpAndTakeMyMoney”
                </p>
              </blockquote>
            </div>
          </div>
          <div class="column">
            <div class="review__wrap">
              <span class="pointer-tip"></span>
              <blockquote>
                <p>
                  “I guess what I'm saying is #ShutUpAndTakeMyMoney”
                </p>
              </blockquote>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="review__wrap">
              <span class="pointer-tip pointer-tip--top"></span>
              <blockquote>
                <p>
                  “Type the name of the icon and it magically transforms into the shape. Awesome on the desktop — Sketch, Powerpoint, Illustrator, Word, etc.”
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [``]
})
export class HomeComponent implements OnInit {
  randomGif: Gif;
  topleaderGifs: Gif[];


  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.getTopLeader();
    this.getRandomGif();
  }

  getRandomGif() {
    this.gifService.getRandom()
      .subscribe(gif => {
        this.randomGif = gif;
      });
  }

  getTopLeader() {
    this.gifService.getTopLeader()
      .subscribe(gifs => this.topleaderGifs = gifs);
  }

}
