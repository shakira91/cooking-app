import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs/Subject';

export class ShopppingListService {
	ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

	private ingredients: Ingredient[] = [
  	new Ingredient(20, 'cherries'),
  	new Ingredient(6, 'bananas'),
  	new Ingredient(10, 'blueberries'),
  ];
  get() {
    return this.ingredients.slice();
  }
  add(amount, name) {
    this.ingredients.push(new Ingredient(amount, name));
    this.ingredientsChanged.next(this.get());
  }
  addFromRecipes(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.get());
  }

}