import { Component, OnInit } from '@angular/core';
import { GifService } from '@app/core/services/gif.service';

@Component({
  selector: 'app-battle',
  template: `
    <h1 class="title has-text-centered">Battle!</h1>

    <div class="columns" *ngIf="battleGifs">
      <div class="column is-half" *ngFor="let gif of battleGifs">
        <div class="gif-container">
          <figure class="image is-1by1">
            <img [src]="gif.url" alt="{{ gif.caption }}">
          </figure>
          <div class="caption">{{ gif.caption }}</div>            
        </div>
      </div>
    </div>
  `,
  styles: [`
  
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
    `]
})
export class BattleComponent implements OnInit {
  battleGifs: Array<any>;


  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.gifService.getBattle()
      .subscribe(gifs => this.battleGifs = gifs);
  }

}
