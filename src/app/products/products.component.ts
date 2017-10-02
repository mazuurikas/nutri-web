import {Component, OnInit} from '@angular/core';
import {Product} from "./product.model";
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<Product> = [
    {name: "TestProduct1", recipe: new Recipe("Baloney sandwich with cucumber")},
    {name: "WolfCookie", recipe: new Recipe("Made from Mongolian wolves")}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
