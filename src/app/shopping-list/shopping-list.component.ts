import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter  } from '@angular/core';

import { Ingredient } from '.././shared/ingredient.model';

import { ShopppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  list = [];

  @ViewChild('shoppingListAmount') amountInputRef: ElementRef;
  @ViewChild('shoppingListName') nameInputRef: ElementRef;

  constructor(private ShopppingListService: ShopppingListService) { }

  onAddItemToShoppingLst(amount, name){
    this.ShopppingListService.add(amount.value, name.value);
  }

  ngOnInit() {
    this.list = this.ShopppingListService.get();
    this.ShopppingListService.ingredientsChanged.subscribe(
    	(ingredients: Ingredient []) => {
    		this.list = ingredients;
    	}
    );
  }

}
