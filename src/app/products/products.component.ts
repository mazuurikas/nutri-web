import {Component, OnInit} from '@angular/core';
import {Product} from "./product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {name: "TestProduct1", description: "Baloney sandwich with cucumber"},
    {name: "WolfCookie", description: "Made from Mongolian wolves"}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
