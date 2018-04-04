import { Component, OnInit } from '@angular/core';
import { Gif } from '@app/models/gif.model';
import { GifService } from '@app/core/services/gif.service';

@Component({
  selector: 'app-leaderboard',
  template: `
    <main class="hero is-fullheight">6
      <div class="hero-body hero-leader">
        <div class="container">
          <h1 class="title has-text-centered">Leaderboard</h1>
          <ol class="leader__list" *ngIf="leaderboardGifs">
            <li *ngFor="let gif of leaderboardGifs; let i = index">
              <app-gif [url]="gif.url" [caption]="gif.caption"></app-gif>
              <span>{{ gif.votes }}</span>
            </li>
          </ol>
        </div>
      </div>
    </main>
  `,
  styles: []
})
export class LeaderboardComponent implements OnInit {
  leaderboardGifs: Gif[];

  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.getLeaderboard();
  }

  getLeaderboard() {
    this.gifService.getLeaderboard()
      .subscribe(gifs => this.leaderboardGifs = gifs);
  }

}
