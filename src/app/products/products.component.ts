import {Component, OnInit} from '@angular/core';
import {Product} from "./product.model";
import {ProductsService} from "./products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
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
