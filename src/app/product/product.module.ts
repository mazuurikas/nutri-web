import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductService} from "./product.service";
import {ProductComponent} from "./product.component";
import {RouterModule} from "@angular/router";
import {PRODUCT_ROUTE} from "./product.route";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([PRODUCT_ROUTE], {useHash: true})
  ],
  declarations: [ProductComponent],
  providers: [ProductService]
})
export class ProductModule {
}
