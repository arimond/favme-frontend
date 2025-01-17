import { Product } from './../../../models/Product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {

  public products:Product[];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    // Extract UserId from URL
    const userId = parseInt(this.route.snapshot.parent.paramMap.get('userId'));

    this.productService.getProducts(userId).subscribe(
      (products) => {
        this.products = products;
      }
    )
  }
}
