import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "@app/services/auth.service.ts";
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-battle',
  template: `
    <main class="hero is-fullheight">7
      <div class="hero-body hero-login">
        <div class="stripe-background"></div>
        <div class="container">
          <section class="login-header">
            <div class="content">
              <h1 class="title is-3">Вход</h1>
              <p>Используйте социальную сеть, чтобы войти на сайт</p>
              <a class="button is-block is-white is-rounded" (click)="signInWithGoogle()">
                <span class="icon is-small">
                  <i class="fa fa-google-plus"></i>
                </span>
                <span>Login with Google</span>
              </a>
              <a class="button is-block is-info is-rounded" (click)="signInWithGoogle()">
                <span class="icon is-small">
                  <i class="fa fa-facebook"></i>
                </span>
                <span>Login with Facebook</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  `,
  styles: [``]
})

@Injectable()
export class LoginComponent implements OnInit {
  private user: Observable<firebase.User>;

  constructor(
    private _firebaseAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService
  ) {
    this.user = _firebaseAuth.authState;
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then((res) => {
          this.router.navigate(['create'])
        })
      .catch((err) => console.log(err));
  }

  ngOnInit() {
    if ( this.authService.isLoggedIn() ) {
      this.router.navigate(['/']);
      return true;
    }
    return false;
  }

}
