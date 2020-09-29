import { Component, OnInit } from '@angular/core';
import {Product} from '../../entities/product/product';
import {ProductService} from '../../services/product/products.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {
  productList: Product[];

  response;
    constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.productList = data;
    });
  }

}
