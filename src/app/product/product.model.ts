import {Recipe} from './recipe.model';
import {Resource} from '../shared/resource.model';

export class Product extends Resource {
  constructor(public name: string, public recipe?: Recipe) {
    super();
  }
}
