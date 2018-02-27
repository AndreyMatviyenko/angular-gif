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
        <figure class="image is-1by1">
          <img [src]="randomGif.url" alt="{{ caption }}">
        </figure>
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
  styles: [`
    .box {
      max-width: 50%;
      margin: 0 auto;
    }

    .gif-container {
      position: relative;
    }

    .caption {
      display: block;
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 20px;
      text-align: center;
      color: #fff;
      font-size: 28px;
      text-transform: uppercase;
      line-height: 1;
      word-break: break-all;
      text-shadow: 1px 1px 3px #000;
    }

    .button {
      display: block;
      width: 100%
    }
  
    img {
      width: 100%;
      border-radius: 3px;
    }

  `]
})
export class CreateComponent implements OnInit {
  randomGif;
  caption = '';

  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.getRandomGif();
  }

  getRandomGif() {
    this.gifService.getRandom()
      .subscribe(gif => {
        this.randomGif = gif;
      });
  }

  saveGif() {
    this.gifService.save(this.randomGif.id, this.randomGif.url, this.caption)
      .subscribe(data => {
        // reload the gif, get a new random gif
        this.getRandomGif();
    
        // clear the caption
        this.caption = '';

        // show a notification of success
      });
  }

}
