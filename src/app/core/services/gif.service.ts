import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class GifService {
  apiUrl = 'https://wt-71ef3a0e019942400abe11a415a1e6dc-0.run.webtask.io/angular-gifs';

  constructor(private http: HttpClient) {}

  // CREATE ===============================
  // get a random gif
  getRandom() {
    return this.http.get(`${this.apiUrl}/random`)
  }

  // store a gif
  save() {

  }

  // BATTLE ===============================
  // get a battle 2 gifs
  getBattle() {

  }

  // vote on a gif
  vote(id) {

  }
  // LEADERBOARD ==========================
  // get
  getLeaderboard() {

  }

}
