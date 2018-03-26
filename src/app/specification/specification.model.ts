import {Resource} from '../shared/resource.model';

export class Specification extends Resource {
  constructor(public name: string,
              public producer: string,
              public comment: string,
              public energyKj: number,
              public energyKCal: number,
              public fats: number,
              public saturatedFats: number,
              public carbohydrates: number,
              public sugars: number,
              public protein: number,
              public salt: number,
              public id?: number) {
    super();
  }
}

export class SpecificationResource {
  constructor(public specifications: Specification[]) {
  }
}
