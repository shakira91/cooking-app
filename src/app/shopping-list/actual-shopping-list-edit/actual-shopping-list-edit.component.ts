import { Component, OnInit, OnDestroy } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';

import { ShopppingListService } from '../shopping-list.service';

import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-actual-shopping-list-edit',
  templateUrl: './actual-shopping-list-edit.component.html',
  styleUrls: ['./actual-shopping-list-edit.component.css']
})
export class ActualShoppingListEditComponent implements OnInit, OnDestroy{
  ingredientsForm: FormGroup; 
  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;

  constructor(private ShopppingListService: ShopppingListService) {
  }

  ngOnInit() {
  	this.ingredientsForm =  new FormGroup({
  		'name': new FormControl(null, Validators.required),
  		'amount': new FormControl(null, [Validators.required, this.checkForNumbers.bind(this)])
  	});

    this.subscription = this.ShopppingListService.startedEditing.subscribe(
        (index: number) => {
          index = this.editedItemIndex;
          this.editMode = true;
        }
      );
  }

  checkForNumbers(control: FormControl): {[s: string] : boolean} {
  	let reg = new RegExp('^[1-9]+[0-9]*$');
  	if (!reg.test(control.value)) {
  		return { 'isANumber': true };
  	} 
  }

  onAddItemToShoppingList(){
    this.ShopppingListService.add(this.ingredientsForm.value.amount, this.ingredientsForm.value.name);
    console.log(this.ingredientsForm)
 }

 ngOnDestroy() {
   this.subscription.unsubscribe();
 }



}
