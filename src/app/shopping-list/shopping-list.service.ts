import { Ingredient } from '../shared/ingredient.model';

import { EventEmitter } from '@angular/core';

export class ShopppingListService {
	ingredientsChanged = new EventEmitter<Ingredient[]>();
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
    this.ingredientsChanged.emit(this.get());
  }
  addFromRecipes(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.get());
  }

}