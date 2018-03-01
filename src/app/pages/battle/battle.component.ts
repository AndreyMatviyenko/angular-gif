import { Component, OnInit } from '@angular/core';
import { GifService } from '@app/core/services/gif.service';
import { Gif } from '@app/models//gif.model';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-battle',
  template: `
    <h1 class="title has-text-centered">Battle!</h1>

    <div class="columns battle__wrap" *ngIf="battleGifs">
      <div class="column is-half battle__wrap--gif" *ngFor="let gif of battleGifs">
        <app-gif
          [url]="gif.url"
          [caption]="gif.caption">
        </app-gif>
  
        <a class="button" (click)="voteOnGif(gif.id)"><i class="fa fa-thumbs-up"></i></a>
      </div>
    </div>
  `,
  styles: [``]
})
export class BattleComponent implements OnInit {
  battleGifs: Gif[];


  constructor(
    private gifService: GifService,
    private flashService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.getNewBattle();
  }

  getNewBattle() {
    this.gifService.getBattle()
      .subscribe(gifs => this.battleGifs = gifs);
  }

  voteOnGif(id) {
    this.gifService.vote(id)
      .subscribe(data => {
        // load a new data
        this.getNewBattle();

        // show a notification of success
        this.flashService.show('Voted on gif!', {
          cssClass: 'notification is-success',
          timeout: 3000
        });

      });
  }

}
