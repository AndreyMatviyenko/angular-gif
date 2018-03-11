import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "@app/services/auth.service.ts";
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="main-header navbar is-fixed-top is-dark">
      <div class="container is-fluid">
        <div class="navbar-brand">
          <a routerLink="/" class="navbar-item">
            <img src="assets/img/logo.svg" width="60" height="60">
          </a>
          <div class="navbar-burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="navbar-menu" id="navMenu">
          <div class="navbar-end">
            <a routerLink="battle" class="navbar-item">
              <span class="icon is-small">
                <i class="fa fa-fighter-jet"></i>
              </span>
              <span>Битва</span>
            </a>
            <a routerLink="create" class="navbar-item">
              <span class="icon is-small">
                <i class="fa fa-plus-circle"></i>
              </span>
              <span>Создать</span>
            </a>
            <a routerLink="leaderboard" class="navbar-item">
              <span class="icon is-small">
                <i class="fa fa-star"></i>
              </span>
              <span>Лидеры</span>
            </a>
            <div class="navbar-item">
              <a *ngIf="this.authService.isLoggedIn(); then btnLogout else btnLogin"></a>
            </div>
            <ng-template #btnLogout>
              <a class="button is-danger navbar-item" (click)="authService.logout()">
                <span class="icon is-small">
                  <i class="fa fa-sign-out"></i>
                </span>
                <span>Выйти</span>
              </a>
            </ng-template>
            <ng-template #btnLogin>
              <a class="button is-success navbar-item" (click)="toggleModalAuth()">
                <span class="icon is-small">
                  <i class="fa fa-sign-in"></i>
                </span>
                <span>Войти</span>
              </a>
            </ng-template>
          </div>
        </div>
      </div>
    </nav>
    <div [class]="modalAuthOpen ? 'modal modal--auth is-active' : 'modal modal--auth'">
      <div class="modal-background" (click)="toggleModalAuth()"></div>
      <div class="modal-card">
        <section class="modal-card-body">
          <div class="content">
            <p class="title is-3">Вход</p>
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
        <button class="modal-close is-large" aria-label="close"  (click)="toggleModalAuth()"></button>
      </div>
    </div>

  `,
  styles: []
})

@Injectable()
export class HeaderComponent implements OnInit {
  private user: Observable<firebase.User>;
  modalAuthOpen = false;

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
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }

  toggleModalAuth() {
    this.modalAuthOpen = !this.modalAuthOpen
  }

}
