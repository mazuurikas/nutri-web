import {Component, OnInit} from '@angular/core';
import {Product} from "./product.model";
import {ProductService} from "./product.service";
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: []
})
export class ProductComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductService) {
  }

  ngOnInit() {
    this.products = [
      new Product("Eesti Pagar moosipall", new Recipe("Esialgne retsept")),
      new Product("Kirde sai juustuga", new Recipe("Mingi kirjeldus")),
      new Product("Karu sepik kurgiga", new Recipe("Talvel ei valmistata")),
      new Product("Juurikasmuuti mustikatega", new Recipe("Ei sisalda taimseid koostisaineid")),
      new Product("Mõõgasupp - Saaremaa Sepad", new Recipe("Täitvam kui noasupp!")),
      new Product("Kilpkonn Kipsi", new Recipe("Retsept ei sisalda kilbi toiteväärtust")),
      new Product("Mango smuuti", new Recipe("100% koer"))
    ];
    // this.productsService.get().subscribe(
    //   (data => {
    // this.products = data;
    // }
    // ), () => {
    //   console.log('get rekt');
    // });
  }

}
