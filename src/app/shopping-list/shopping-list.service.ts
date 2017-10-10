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

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  remove(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, updated: Ingredient) {
    this.ingredients[index] = updated;
    this.ingredientsChanged.next(this.ingredients.slice());
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