export class Specification {
  constructor(public id: number,
              public name: string,
              public producer: string,
              public comment: string,
              public energyKj: number,
              public energyKCal: number,
              public fats: number,
              public saturatedFats: number,
              public carbohydrates: number,
              public sugars: number,
              public protein: number,
              public salt: number) {}
}
