import { Observable } from 'rxjs';
import { Balance } from './../models/Balance';
import { Username } from './../models/Username'
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { JsonHeader } from './HttpHeader/JsonHeader';
import { UserLogin } from './../models/UserLogin';
import { environment} from './../../environments/environment';
import { User } from './../models/User';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthenticationService
  ) { 

  }

  register(user:User) {
    this.http.post(environment.serverUrl+'users/register',user,{headers: JsonHeader}).subscribe(
      response => {
      },
      error => {
        console.log(error);
      },
      () => {
        this.router.navigate(['login']);
      }
    );
  }

  login(user:UserLogin) {
    this.http.post(environment.serverUrl+'users/login',user,{headers: JsonHeader}).subscribe(
      response => {
        this.authService.setLocalStorage(response);
      },
      error => {
        console.log(error);
      },
      () => {
        this.router.navigate(['user/profile']);
      }
    );
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['login']);
  }

  getBalance():Observable<Balance>{
      return this.http.get<Balance>(environment.serverUrl+'users/balance');
  }

  getUsername(userId:number):Observable<Username>{
    return this.http.get<Username>(`${environment.serverUrl}users/username/${userId}`);
  }

  getUserId(){
    return this.authService.getUserId();
  }
}
