import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

import { RecipeService } from '../recipe.service';
import { ShopppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeID: number;
  recipes: Recipe;

  constructor(private ShopppingListService: ShopppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    //const id = this.route.snapshot.params['id']; --> if expecting no updates
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeID = +params['id'];// '+' converts to integer
        this.recipes = this.recipeService.getRecipe(this.recipeID)
        }
      );
  }
  edit() {
    this.router.navigate(['edit'], { relativeTo: this.route});
    //this.router.navigate(['../', this.recipeID, 'edit'], { relativeTo : this.route}); 
    // --> more complex way
  }

  addToList() {
  	this.ShopppingListService.addFromRecipes(this.recipes.ingredients);
  	console.log(this.recipes.ingredients[0])
  }

}
