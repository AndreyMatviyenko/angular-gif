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
            <a routerLink="battle" class="navbar-item">Битва</a>
            <a routerLink="create" class="navbar-item">Создать</a>
            <a routerLink="leaderboard" class="navbar-item">Лидеры</a>
            <a *ngIf="userAuth; then btnLogout else btnLogin" class="navbar-item" (click)="toggleModalAuth()"></a>
            <ng-template #btnLogout>
              <a class="navbar-item" (click)="toggleModalAuth()">Выйти</a>
            </ng-template>
            <ng-template #btnLogin>
              <a class="navbar-item" (click)="toggleModalAuth()">Войти</a>
            </ng-template>
          </div>
        </div>
      </div>
    </nav>

    <div [class]="modalAuthOpen ? 'modal is-active' : 'modal'">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Вход/Регистрация</p>
          <button class="delete" (click)="toggleModalAuth()"></button>
        </header>
        <section class="modal-card-body">
          <div class="content">
            <a class="button btn-block is-info is-rounded" (click)="signInWithGoogle()">
              <span class="icon is-small">
                <i class="fab fa-google-plus"></i>
              </span>
              <span>Login with Google</span>
            </a>
          </div>
        </section>
      </div>
    </div>

  `,
  styles: []
})

@Injectable()
export class HeaderComponent implements OnInit {
  private user: Observable<firebase.User>;
  modalAuthOpen = false;
  userAuth = false;

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
          console.log(res)
          this.router.navigate(['create'])
        })
      .catch((err) => console.log(err));
  }

  ngOnInit() {
    if ( this.authService.isLoggedIn() ) {
      this.userAuth = true;
      return true;
    }
    this.router.navigate(['/']);
    this.userAuth = false;
    return false;
  }

  toggleModalAuth() {
    this.modalAuthOpen = !this.modalAuthOpen
  }

}
