import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SPECIFICATION_ROUTE} from './specification.route';
import {SpecificationComponent} from './specification.component';
import {CommonModule} from '@angular/common';
import {AddSpecificationModalComponent} from './modal/modal.component';
import {FormsModule} from '@angular/forms';
import {EnergyConverterPipe} from '../energy-converter.pipe';
import {RoundPipe} from '../round.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([SPECIFICATION_ROUTE], {useHash: true}),
    FormsModule],
  declarations: [
    SpecificationComponent,
    AddSpecificationModalComponent,
    EnergyConverterPipe,
    RoundPipe],
  bootstrap: []
})
export class SpecificationModule {
}
