import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="main-footer">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="content has-text-left">
              <p>
                Made with <i class="fa fa-heart"></i> & <i class="fa fa-coffee"></i> in Ukraine
              </p>
            </div>
          </div>
          <div class="column">
            <div class="content has-text-right">
              <p>
                Made with <i class="fa fa-heart"></i> & <i class="fa fa-coffee"></i> in Ukraine"
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="content has-text-centered">
          <p>
            © 2017 - Gifsta. All rights reserved
          </p>
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
