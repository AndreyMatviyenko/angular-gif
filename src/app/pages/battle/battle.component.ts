import { Component, OnInit } from '@angular/core';
import { GifService } from '@app/core/services/gif.service';
import { Gif } from '@app/models//gif.model';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-battle',
  template: `
  <main class="hero is-fullheight">2
    <div class="hero-body hero-battle">
      <div class="container">
        <h1 class="title has-text-centered">Выбери гифку!</h1>
    
        <div class="columns battle__wrap" *ngIf="battleGifs">
          <img class="battle__wrap--vs" src="assets/img/vs.svg">
          <div class="column is-half battle__wrap--gif" *ngFor="let gif of battleGifs">
            <app-gif
              [url]="gif.url"
              [caption]="gif.caption">
            </app-gif>
            <a class="button is-success" (click)="voteOnGif(gif.id)"><i class="fa fa-thumbs-up"></i></a>
          </div>
        </div>
        <div class="has-text-centered">
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <!-- gifsta-test -->
          <ins class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-6079804098503978"
              data-ad-slot="7032395918"
              data-ad-format="auto"></ins>
          <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>
      </div>
    </div>
  </main>
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
        this.flashService.show('Голос учтен!', {
          cssClass: 'notification is-success',
          timeout: 3000
        });

      });
  }

}
