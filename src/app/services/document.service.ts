import { environment } from './../../environments/environment';
import { DocumentUpload } from './../models/DocumentUpload';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(
    private http: HttpClient
  ) { }

  uploadDocument(document:DocumentUpload):void{
    const fd = new FormData();
    // Transform Json Object to Form Data
    for(let key in document){
      fd.append(key, document[key]);
    }
    this.http.post(environment.serverUrl+'users/documents',fd).subscribe(
      response => console.log(response)
    )
  }
}
