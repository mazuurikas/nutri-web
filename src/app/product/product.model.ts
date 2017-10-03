import {Recipe} from "./recipe.model";

export class Product {
  constructor(public name: string, public recipe: Recipe) {
  }
}
