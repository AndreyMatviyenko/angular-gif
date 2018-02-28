import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gif',
  template: `
    <div class="gif-container">
      <figure class="image is-1by1">
        <img [src]="url" alt="{{ caption }}">
      </figure>
      <div class="caption">{{ caption }}</div>
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
export class GifComponent implements OnInit {
  @Input() url: string;
  @Input() caption: string;

  constructor() { }

  ngOnInit() {
  }

}
