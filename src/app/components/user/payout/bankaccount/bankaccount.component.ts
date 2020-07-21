import { Bankaccount } from './../../../../models/Bankaccount';
import { BankaccountService } from './../../../../services/bankaccount.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BankaccountUpload } from 'src/app/models/BankaccountUpload';

@Component({
  selector: 'app-bankaccount',
  templateUrl: './bankaccount.component.html',
  styleUrls: ['./bankaccount.component.scss']
})
export class BankaccountComponent implements OnInit {

  constructor(
    private bankaccountService: BankaccountService
    ) { }

  ngOnInit(): void {
  }

  uploadBankaccount(bankaccountForm:NgForm){
    this.bankaccountService.uploadBankaccount(<BankaccountUpload>bankaccountForm.value);
  }
}
