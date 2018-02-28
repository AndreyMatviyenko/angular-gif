import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BattleComponent } from "@app/pages/battle/battle.component";
import { CreateComponent } from "@app/pages/create/create.component";
import { HomeComponent } from "@app/pages/home/home.component";
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
