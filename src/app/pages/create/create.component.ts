import { Component, OnInit } from '@angular/core';
import { GifService } from "@app/core/services/gif.service";
import { Gif } from '@app/models//gif.model';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-create',
  template: `
    <main class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">
            Create a gif!
          </h1>

          <div class="box create__wrap">
            
            <app-gif
              *ngIf="randomGif"
              [url]="randomGif.url"
              [caption]="caption">
            </app-gif>
            <a class="btn-refresh" (click)="getRandomGif()"><i class="fa fa-sync"></i></a>
            <div class="field">
              <input type="text" class="input" [(ngModel)]="caption">
            </div>

            <a class="button is-link" (click)="saveGif()">
              Create!
            </a>
          </div>
        </div>
      </div>
    </main>
  `,
  styles: [`
    .box {
      max-width: 50%;
      margin: 0 auto;
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
  randomGif: Gif;
  caption = '';

  constructor(
    private gifService: GifService,
    private flashService: FlashMessagesService
  ) { }

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
        this.flashService.show('Created a new gif!', {
          cssClass: 'notification is-success',
          timeout: 3000
        });
      });
  }

}
