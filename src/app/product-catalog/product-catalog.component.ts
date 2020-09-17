import { Component, OnInit } from '@angular/core';
import {Product} from '../product-catalog/product';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {
  product: Product = {
    name: 'Dell XPS 5200',
    price: 52000,
    rating: 4.2,
    stockUnits: 1000,
    image: 'assets/images/XPS5200.png'

  }

  constructor() { }

  ngOnInit(): void {
  }

}
