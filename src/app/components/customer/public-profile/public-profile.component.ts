import { ProfileService } from './../../../services/profile.service';
import { Profile } from './../../../models/Profile';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {
  public profile:Profile;

  constructor(
    private profileServcice:ProfileService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    // Extract userId from URL
    const userId = parseInt(this.route.snapshot.paramMap.get('userId'));
    
    this.profileServcice.getProfile(userId).subscribe(
      (profile) => {
        this.profile=profile;
      }
    )
  }
}
