import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MainComponent} from './layouts/main/main.component';
import {ProductComponent} from './product/product.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductModule} from "./product/product.module";
import {NavbarComponent} from "./layouts/navbar/navbar.component";
import {NavbarModule} from "./layouts/navbar/navbar.module";

@NgModule({
  declarations: [
    MainComponent,
    ProductComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ProductModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule {
}
