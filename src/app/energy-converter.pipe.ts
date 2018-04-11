import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'energyConverter'
})
export class EnergyConverterPipe implements PipeTransform {

  transform(energyKCal: number, args?: any): number {
    if (energyKCal) {
      return Math.round(energyKCal * 4.184);
    }
    return 0;
  }

}
