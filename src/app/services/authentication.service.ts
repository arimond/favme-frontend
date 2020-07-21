import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  setLocalStorage(response) {
    const expiresAt = moment().add(response.expiresIn);
    localStorage.setItem('token', response.token);
    localStorage.setItem('expires', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
  }

  getExpirationDate() {
    return moment(JSON.parse(localStorage.getItem('expires')));
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpirationDate());
  }

  isLoggedOut(){
    return !this.isLoggedIn();
  }
}
