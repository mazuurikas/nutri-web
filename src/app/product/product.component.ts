import {Component, OnInit} from '@angular/core';
import {Product} from "./product.model";
import {ProductsService} from "./product.service";

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.productsService.get().subscribe(
      (data => {
          this.products = data;
        }
      ), () => {
        console.log('get rekt');
      });
  }

}
