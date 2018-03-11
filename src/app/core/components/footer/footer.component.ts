import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer main-footer">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="content has-text-centered">
              <div class="menu">
                <ul class="menu-list">
                  <li>
                    <a routerLink="contact">Контакты</a>
                  </li>
                  <li>
                    <a routerLink="about">О проекте</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="columns">
          <div class="column has-text-centered">
            <p>
              Made with
              <span class="icon has-text-danger">
                <i class="fa fa-heart"></i>
              </span> &
              <span class="icon has-text-info">
                <i class="fa fa-coffee"></i>
              </span> 
              in Ukraine
            </p>
            <p>
              © 2017 - Gifsta. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
    `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
