import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Product} from "./product.model";
import "rxjs/add/operator/map";

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<Product[]> {
    return this.http.get('http://localhost:8181/products').map(data => {
      return data['_embedded']['products']
    });
  }
}
