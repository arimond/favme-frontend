import { Product } from './../../../../models/Product';
import { ProductService } from './../../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductUpload } from 'src/app/models/ProductUpload';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public image:File = null;

  constructor(
    private productService:ProductService
  ) { }

  ngOnInit(): void {
  }

  imageSelected(event){
    this.image = event.target.files[0];
  }

  addProduct(productForm:NgForm){
    this.productService.uploadProduct(<ProductUpload>{image:this.image, ...productForm.value});
  }
}
