import { Component, OnInit } from '@angular/core';
import { GifService } from '@app/core/services/gif.service';
import { Gif } from '@app/models/gif.model';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '@app/services/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  template: `
    <main class="hero is-fullheight">
      <div class="hero-body hero-create">
        <div class="container">
          <h1 class="title has-text-centered">
            Create a gif!
          </h1>

          <div [class]="dropdownOpen ? 'dropdown is-active' : 'dropdown'">
            <div class="dropdown-trigger" (click)="toggleDropMenu()">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>Dropdown button</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <a href="#" class="dropdown-item">
                  Animals
                </a>
                <a class="dropdown-item">
                  Sport
                </a>
                <a href="#" class="dropdown-item is-active">
                  Funny
                </a>
                <a href="#" class="dropdown-item">
                  Other dropdown item
                </a>
                <hr class="dropdown-divider">
                <a href="#" class="dropdown-item">
                  With a divider
                </a>
              </div>
            </div>
          </div>
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

    @media only screen and (max-width : 767px) {
      .box {
        max-width: 400px;
      }
    }

  `]
})

@Injectable()
export class CreateComponent implements OnInit {
  randomGif: Gif;
  caption = '';
  dropdownOpen = false;

  constructor(
    private gifService: GifService,
    private flashService: FlashMessagesService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if ( this.authService.isLoggedIn() ) {
      this.getRandomGif();
      return true;
    }
    this.router.navigate(['/']);
    return false;
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
        this.flashService.show('Гифка успешно создана!', {
          cssClass: 'notification is-success',
          timeout: 3000
        });
      });
  }

  toggleDropMenu() {
    this.dropdownOpen = !this.dropdownOpen
  }

}
