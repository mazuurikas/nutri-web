import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductsModule} from "./product/product.module";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
