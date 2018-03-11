import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BattleComponent } from "@app/pages/battle/battle.component";
import { CreateComponent } from "@app/pages/create/create.component";
import { HomeComponent } from "@app/pages/home/home.component";
import { LoginComponent } from "@app/pages/login/login.component";
import { ContactComponent } from '@app/pages/contact/contact.component';
import { AboutComponent } from '@app/pages/about/about.component';
import { LeaderboardComponent } from "@app/pages/leaderboard/leaderboard.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'battle',
    component: BattleComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
