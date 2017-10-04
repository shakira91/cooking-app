import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

import { Ingredient } from '.././shared/ingredient.model';

export class RecipeService {

	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [new Ingredient (20, 'Cow')]),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [new Ingredient (40, 'Duck')])
  	];

	 getRecipes() {
	  return this.recipes.slice();
	 }

	 getRecipe(id) {
	  return this.recipes[id];
	 }

	
}