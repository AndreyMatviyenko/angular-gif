import { Component, OnInit } from '@angular/core';
import { GifService } from "@app/core/services/gif.service";

@Component({
  selector: 'app-create',
  template: `
    <h1 class="title has-text-centered">
      Create a gif!
    </h1>

    <div class="box">
      <div class="gif-container" *ngIf="randomGif">
        <img [src]="randomGif.url" alt="{{ caption }}">
        <div class="caption">{{ caption }}</div>
      </div>
      
      <div class="field">
        <input type="text" class="input" [(ngModel)]="caption">
      </div>

      <a class="button is-link" (click)="saveGif()">
        Create!
      </a>
    </div>

  `,
  styles: []
})
export class CreateComponent implements OnInit {
  randomGif;
  caption = '';

  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.gifService.getRandom()
      .subscribe(gif => {
        this.randomGif = gif;
      });
  }

}
