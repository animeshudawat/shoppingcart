import { Injectable } from '@angular/core';

import { HttpService } from '../../core/http/http.service';
import { TYPES } from '../../core/http/request.types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpService: HttpService) {
  }

  getProducts() {
     return this.httpService.sendRequest(TYPES.GET, 'http://localhost:8080/api/products');
  }
}
