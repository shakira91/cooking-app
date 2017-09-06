import { Component, OnInit} from '@angular/core';

import { Ingredient } from '/Users/Shakira/Desktop/cooking-app/src/app/shared/ingredient.model';


@Component({
  selector: 'app-actual-shopping-list',
  templateUrl: './actual-shopping-list.component.html',
  styleUrls: ['./actual-shopping-list.component.css']
})

export class ActualShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
  	new Ingredient(20, 'cherries'),
  	new Ingredient(6, 'bananas'),
  	new Ingredient(10, 'blueberries'),
  	]

  	

  	  constructor() { }

  ngOnInit() {
  }

}
