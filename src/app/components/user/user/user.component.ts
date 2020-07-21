import { Balance } from './../../../models/Balance';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public balance:Balance;

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.getBalance();
  }

  getBalance(){
    this.userService.getBalance().subscribe(
      balance => {
        this.balance = balance;
      }
    );
  }

  logout(){
    this.userService.logout();
  }
}
