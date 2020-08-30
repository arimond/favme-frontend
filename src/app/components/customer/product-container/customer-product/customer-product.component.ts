import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../../../../models/Product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-product',
  templateUrl: './customer-product.component.html',
  styleUrls: ['./customer-product.component.scss']
})
export class CustomerProductComponent implements OnInit {

  @Input() product:Product;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  navigateToProduct(){
    this.router.navigate([String(this.product.productId)],{ relativeTo: this.route});
  }

}
