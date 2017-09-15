import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';

import { RecipeService } from '../recipe.service';

import { ShopppingListService } from '../../shopping-list/shopping-list.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipes: Recipe; 

  constructor(private ShopppingListService: ShopppingListService) { }

  ngOnInit() {
  }

  addToList() {
  	this.ShopppingListService.addFromRecipes(this.recipes.ingredients);
  	console.log(this.recipes.ingredients[0])
  }

}
