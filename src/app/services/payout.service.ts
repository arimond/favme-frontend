import { environment } from './../../environments/environment';
import { PayoutRequest } from './../models/PayoutRequest';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PayoutService {

  constructor(
    private http:HttpClient
  ) { }

  requestPayout(payout:PayoutRequest):void{
    this.http.post(environment.serverUrl+'users/payouts',payout).subscribe(
      payout => console.log(payout)
    );
  }
}
