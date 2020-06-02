import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';
import { JwtResponse } from './jwt-response';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';
// import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER = "https://harvest-api-rest.herokuapp.com/api";
  authSubject  =  new  BehaviorSubject(false);
//@Inject(LOCAL_STORAGE) private storage: StorageService
  constructor(private httpClient: HttpClient) { }

  register(user: User): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/register`, user).pipe(
      tap((res:  JwtResponse ) => {
        if (res.user) {
          localStorage.setItem("ACCESS_TOKEN", res.access_token);
          localStorage.setItem("EXPIRES_IN", res.expires_in);
          this.authSubject.next(true);
        }
      })

    );
  }


  singIn(user: User): Observable<JwtResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER}/login`, user).pipe(
      tap(async (res: JwtResponse) => {
        if (res) {
          localStorage.setItem("ACCESS_TOKEN",res.access_token);
          localStorage.setItem("EXPIRES_IN", res.expires_in);
          this.authSubject.next(true);
        }
      })
    );
  }


  signOut() {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
    localStorage.next(false);
  }

  isAuthenticated() {
    return  this.authSubject.asObservable();
  }

}



