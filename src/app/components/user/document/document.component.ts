import { DocumentUpload } from './../../../models/DocumentUpload';
import { DocumentService } from './../../../services/document.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  public image:File = null;

  constructor(
    private documentService: DocumentService
  ) { }

  ngOnInit(): void {
  }

  imageSelected(event){
    this.image = event.target.files[0];
  }

  uploadDocument(documentForm:NgForm){
    this.documentService.uploadDocument(<DocumentUpload>{image: this.image, ...documentForm.value});
  }

}
