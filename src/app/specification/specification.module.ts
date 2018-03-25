import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SPECIFICATION_ROUTE} from "./specification.route";
import {SpecificationComponent} from "./specification.component";
import {CommonModule} from "@angular/common";
import {AddSpecificationModalComponent} from "./modal/add.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([SPECIFICATION_ROUTE], {useHash: true}),
    FormsModule],
  declarations: [SpecificationComponent,
    AddSpecificationModalComponent],
  bootstrap: []
})
export class SpecificationModule {

}
