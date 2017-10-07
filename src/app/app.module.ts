import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MainComponent} from './layouts/main/main.component';
import {ProductModule} from "./product/product.module";
import {NavbarComponent} from "./layouts/navbar/navbar.component";
import {LayoutRoutingModule} from "./layouts/layout-routing.module";
import {HomeModule} from "./home/home.module";

@NgModule({
  imports: [
    BrowserModule,
    LayoutRoutingModule,
    NgbModule.forRoot(),
    HomeModule,
    ProductModule
  ],
  declarations: [
    MainComponent,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule {
}
