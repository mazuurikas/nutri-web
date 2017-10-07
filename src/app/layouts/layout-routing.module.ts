import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NAVBAR_ROUTE} from "../app.route";

const LAYOUT_ROUTES = [
  NAVBAR_ROUTE
];

@NgModule({
  imports: [
    RouterModule.forRoot(LAYOUT_ROUTES, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule {
}
