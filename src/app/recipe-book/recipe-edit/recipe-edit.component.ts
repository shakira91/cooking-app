import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup; 
  constructor(private route: ActivatedRoute,
               private recipeService: RecipeService,
               private router: Router) { }

  ngOnInit() {
  	this.route.params.subscribe(
  		(params: Params) => {
  			this.id = +params['id'];
  			this.editMode = params['id'] != null;
        this.initForm();
  		}
  	)
  }

  cancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //     this.recipeForm.value.name,
    //     this.recipeForm.value.description,
    //     this.recipeForm.value.imagePath,
    //     this.recipeForm.value.ingredients
    //   );
    if (this.editMode) {   
      this.recipeService.updateRecipes(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipes(this.recipeForm.value);
    }
    //console.log(this.recipeForm.value)
    this.cancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
        new FormGroup({
            'name' : new FormControl(null, Validators.required),
            'amount' : new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          })
      )
  }

  private initForm() { 
    let recipeName = '';
    let recipeImg = '';
    let recipeDesc = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImg = recipe.imagePath;
      recipeDesc = recipe.description;
      if(recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name' : new FormControl(ingredient.name, Validators.required),
              'amount' : new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName, Validators.required),
      'imagePath' : new FormControl(recipeImg, Validators.required),
      'description' : new FormControl(recipeDesc, Validators.required),
      'ingredients' : recipeIngredients

    })
  }

  deleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
