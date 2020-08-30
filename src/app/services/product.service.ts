import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { ProductUpload } from './../models/ProductUpload';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from './../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  uploadProduct(product:ProductUpload):void{
    console.log(product);
    const fd = new FormData();
    // Transform Json Object to Form Data
    for(let key in product){
      fd.append(key, product[key]);
    }
    this.http.post<Product>(environment.serverUrl+'users/products',fd).subscribe(
      product => console.log(product)
    );
  }

  getProducts(userId:number):Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.serverUrl}users/${userId}/products`);
  }

  getProduct(userId:number, productId:number):Observable<Product>{
    return this.http.get<Product>(`${environment.serverUrl}users/${userId}/products/${productId}`);
  }
}
