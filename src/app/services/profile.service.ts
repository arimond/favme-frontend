import { environment } from './../../environments/environment';
import { ProfileUpload } from './../models/ProfileUpload';
import { Profile } from './../models/Profile'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  uploadProfile(profile:ProfileUpload):Observable<Profile>{
    const fd = new FormData();
    // Transform Json Object to Form Data
    for(let key in profile){
      fd.append(key, profile[key]);
    }
    return this.http.put<Profile>(environment.serverUrl+'users/profile',fd);
  }

  getProfile(profile:ProfileUpload):Observable<Profile>{
    return this.http.get<Profile>(environment.serverUrl+'users/profile');
  }
}
