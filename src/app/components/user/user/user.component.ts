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
  public userUrl:String;

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.getBalance();
    this.userUrl = `http://localhost:4200/customer/user/${this.userService.getUserId()}`;
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
