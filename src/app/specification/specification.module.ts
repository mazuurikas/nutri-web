import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SPECIFICATION_ROUTE} from "./specification.route";
import {SpecificationComponent} from "./specification.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([SPECIFICATION_ROUTE], {useHash: true})],
  declarations: [SpecificationComponent]
})
export class SpecificationModule {

}
