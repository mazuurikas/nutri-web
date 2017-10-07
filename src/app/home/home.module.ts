import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {RouterModule} from "@angular/router";
import {HOME_ROUTE} from "./home.route";

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forRoot([HOME_ROUTE], {useHash: true})]
})

export class HomeModule {

}
