import { PayoutRequest } from './../../../../models/PayoutRequest';
import { Bankaccount } from './../../../../models/Bankaccount';
import { BankaccountService } from './../../../../services/bankaccount.service';
import { PayoutService } from './../../../../services/payout.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-submitpayout',
  templateUrl: './submitpayout.component.html',
  styleUrls: ['./submitpayout.component.scss']
})
export class SubmitpayoutComponent implements OnInit {
  public bankaccounts: Bankaccount[]

  constructor(
    private payoutService:PayoutService,
    private bankaccountService:BankaccountService
  ) { }

  ngOnInit(): void {
    this.getBankaccounts();
  }

  getBankaccounts(){
    this.bankaccountService.getBankaccounts().subscribe(
      (bankaccounts) => this.bankaccounts = bankaccounts
    );
  }

  requestPayout(payout:NgForm){
    this.payoutService.requestPayout(<PayoutRequest>payout.value);
  }

}
