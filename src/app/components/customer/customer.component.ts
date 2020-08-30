import { ActivatedRoute } from '@angular/router';
import { Username } from './../../models/Username';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  username: Username;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.getUsername();
  }

  getUsername(){
    const userId = parseInt(this.route.snapshot.paramMap.get('userId'));
    console.log(userId);
    this.userService.getUsername(userId).subscribe(
      (username) => {
        this.username = username;
      }
    );
  }
}
