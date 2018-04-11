import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  static round(number, precision): number {
    const shift = function (num, prec, reverseShift) {
      if (reverseShift) {
        prec = -prec;
      }
      const numArray = ('' + num).split('e');
      return +(numArray[0] + 'e' + (numArray[1] ? (+numArray[1] + prec) : prec));
    };
    return shift(Math.round(shift(number, precision, false)), precision, true);
  }

  transform(number: number, scale?: number): number {
    return RoundPipe.round(number, scale);
  }
}
