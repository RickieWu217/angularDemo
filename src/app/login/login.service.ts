// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { Observable, BehaviorSubject, of,Subject  } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';
import { AppConfig } from '../app.config';

@Injectable()
export class LoginService {
  loginStatus = new BehaviorSubject<boolean>(false);
  currentUser = new BehaviorSubject<User>(null);
  constructor(
    private http: HttpClient,
    private appConfig: AppConfig
  ) { }

  loginServer(loginData): Observable<Response> {
    let username = loginData.username.trim();
    let password = loginData.password.trim();
    return this.http.post<Response>(this.appConfig.apiUrl + '/users/authenticate', { username: username, password: password });
  }

  login(loginData): Observable<boolean> {
    return this.loginServer(loginData)
      .pipe(
        map((res: Response) => {
          if (res.ok) {
            this.loginStatus.next(true);
            this.currentUser.next(loginData.username);
            return true;
          } else {
            console.log('can not login');
            return false;
          }
        },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log('client-side error');
            } else {
              console.log('server-side error');
            }
            return of(false);
          }));
  }

  logout() {
    this.loginStatus.next(false);
    this.currentUser.next(null);
  }
  getLoginStatus(): Observable<boolean> {
    return this.loginStatus;
  }
  getCurrentUser(): Observable<User> {
    return this.currentUser;
  }
}
