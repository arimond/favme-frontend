import { Observable } from 'rxjs';
import { BankaccountUpload } from './../models/BankaccountUpload';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Bankaccount} from './../models/Bankaccount'

@Injectable({
  providedIn: 'root'
})
export class BankaccountService {

  constructor(
    private http: HttpClient
  ) { }
  
  uploadBankaccount(bankaccount:BankaccountUpload):void{
    this.http.post<Bankaccount>(environment.serverUrl+'users/bankaccounts',bankaccount).subscribe(
      (bankaccount) => {
        console.log(bankaccount);
      }
    );
  }

  getBankaccounts():Observable<Bankaccount[]>{
    return this.http.get<Bankaccount[]>(environment.serverUrl+'users/bankaccounts');
  }
}
