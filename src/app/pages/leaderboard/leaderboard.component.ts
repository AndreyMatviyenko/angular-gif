import { Component, OnInit } from '@angular/core';
import { Gif } from '@app/models/gif.model';
import { GifService } from '@app/core/services/gif.service';

@Component({
  selector: 'app-leaderboard',
  template: `
    <h1 class="title has-text-centered">Leaderboard</h1>
    <ol *ngIf="leaderboardGifs">
      <li *ngFor="let gif of leaderboardGifs; let i = index">
        <app-gif [url]="gif.url" [caption]="gif.caption"></app-gif>
        <b>{{ gif.votes }}</b>
      </li>
    </ol>
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
