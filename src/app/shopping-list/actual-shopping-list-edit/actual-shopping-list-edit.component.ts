import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '/Users/Shakira/Desktop/cooking-app/src/app/shared/ingredient.model';


@Component({
  selector: 'app-actual-shopping-list-edit',
  templateUrl: './actual-shopping-list-edit.component.html',
  styleUrls: ['./actual-shopping-list-edit.component.css']
})
export class ActualShoppingListEditComponent implements OnInit {
  @ViewChild('shoppingListAmount') amountInputRef: ElementRef;
  @ViewChild('shoppingListName') nameInputRef: ElementRef;

  ingredients: Ingredient[] = [
  	new Ingredient(20, 'cherries'),
  	new Ingredient(6, 'bananas'),
  	new Ingredient(10, 'blueberries'),
  ];

  onAddItemToShoppingLst(amount, name){
    this.ingredients.push(new Ingredient(amount.value, name.value));
  }

  constructor() { }

  ngOnInit() {
  }

}
