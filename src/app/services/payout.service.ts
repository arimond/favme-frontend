import { environment } from './../../environments/environment';
import { Payout } from './../models/Payout';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PayoutService {

  constructor(
    private http:HttpClient
  ) { }

  requestPayout(payout:Payout):void{
    console.log(payout);
    this.http.post(environment.serverUrl+'users/payouts',payout).subscribe(
      payout => console.log(payout)
    )
  }
}
