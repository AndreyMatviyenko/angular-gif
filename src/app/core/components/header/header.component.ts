import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar is-dark">
    <div class="container">
      <div class="navbar-brand">
        <a routerLink="/" class="navbar-item">Gifsta</a>
        <div class="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <a routerLink="/" class="navbar-item">Battle</a>
          <a routerLink="create" class="navbar-item">Create</a>
          <a routerLink="leaderboard" class="navbar-item">Leaderbord</a>
        </div>
      </div>
    </div>
  </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
