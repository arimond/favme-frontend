import { Observable } from 'rxjs';
import { ClientSecret } from './../models/ClientSecret';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient
  ) { }

  getClientSecret(userId:number, productId:number):Observable<ClientSecret>{
    return this.http.get<ClientSecret>(`${environment.serverUrl}users/${userId}/products/${productId}/secret`);
  }
}
