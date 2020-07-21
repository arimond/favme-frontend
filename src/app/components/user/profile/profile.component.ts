import { ProfileService } from './../../../services/profile.service';
import { Profile } from './../../../models/Profile'
import {ProfileUpload} from './../../../models/ProfileUpload';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profile:Profile;
  public image:File= null;

  constructor(
    private profileService:ProfileService
  ) { }

  ngOnInit(): void {
  }

  imageSelected(event){
    this.image = event.target.files[0];
  }

  uploadProfile(profileForm:NgForm){
    this.profileService.uploadProfile(<ProfileUpload>{image: this.image, ...profileForm.value}).subscribe(
      profile => {
        this.profile = profile;
      }
    );
  }
}
