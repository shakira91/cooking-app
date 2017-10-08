import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '.././shared/ingredient.model';

import { ShopppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  list = [];
  private subscription: Subscription;

  // @ViewChild('shoppingListAmount') amountInputRef: ElementRef;
  // @ViewChild('shoppingListName') nameInputRef: ElementRef;

 constructor(private ShopppingListService: ShopppingListService) { }
  
  editItem(index: number) {
    this.ShopppingListService.startedEditing.next(index);
  }

  ngOnInit() {
    this.list = this.ShopppingListService.get();
    this.subscription = this.ShopppingListService.ingredientsChanged.subscribe(
    	(ingredients: Ingredient[]) => {
    		this.list = ingredients;
    	}
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); //prevent memory leakes
  }

}
