import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

import { Subject } from 'rxjs/Subject';

import { Ingredient } from '.././shared/ingredient.model';

export class RecipeService {
	recipeChanged = new Subject<Recipe[]>();

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


	 addRecipes(recipe: Recipe) {
	   this.recipes.push(recipe);
	   this.recipeChanged.next(this.recipes.slice());
	 }

	 deleteRecipes(index: number) {
	   this.recipes.splice(index, 1);
	   this.recipeChanged.next(this.recipes.slice());
	 }

	 updateRecipes(index: number, newRecipe: Recipe) {
	 	this.recipes[index] = newRecipe;
	 	this.recipeChanged.next(this.recipes.slice());
	 }

	
}