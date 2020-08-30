import { Product } from './../../../models/Product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  public product:Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    const userId = parseInt(this.route.snapshot.parent.paramMap.get('userId'));
    const productId = parseInt(this.route.snapshot.paramMap.get('productId'));
    this.productService.getProduct(userId, productId).subscribe(
      product => {
        this.product = product;
      }
    )
  }
}
