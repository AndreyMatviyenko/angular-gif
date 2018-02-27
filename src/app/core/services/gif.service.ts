import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GifService {
  apiUrl = 'https://wt-71ef3a0e019942400abe11a415a1e6dc-0.run.webtask.io/angular-gifs';

  constructor(private http: HttpClient) {}

  // CREATE ===============================
  // get a random gif
  getRandom(): Observable<any> {
    return this.http.get(`${this.apiUrl}/random`)
  }

  // store a gif
  save(id: string, url: string, caption: string): Observable<any> {
    return this.http.post(this.apiUrl, {id, url, caption, votes: 0 });
  }

  // BATTLE ===============================
  // get a battle 2 gifs
  getBattle(): Observable<any> {
    return this.http.get(`${this.apiUrl}/versus`);
  }

  // vote on a gif
  vote(id) {
    return this.http.post(`${this.apiUrl}/vote`, { id });
  }
  // LEADERBOARD ==========================
  // get
  getLeaderboard() {

  }

}
