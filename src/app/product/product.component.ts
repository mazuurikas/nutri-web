import {Component, OnInit} from '@angular/core';
import {Product} from './product.model';
import {ProductService} from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductService) {
  }

  ngOnInit() {
    this.productsService.get().subscribe(
      (data => {
          this.products = data;
        }
      ), () => {
      });
  }

}
