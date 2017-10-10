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
  editedIngredient: Ingredient;

  constructor(private ShopppingListService: ShopppingListService) {
  }

  ngOnInit() {
  	this.ingredientsForm =  new FormGroup({
  		'name': new FormControl(null, Validators.required),
  		'amount': new FormControl(null, [Validators.required, this.checkForNumbers.bind(this)])
  	});

    this.subscription = this.ShopppingListService.startedEditing.subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedIngredient = this.ShopppingListService.getIngredient(index);
          this.ingredientsForm.setValue({
            name: this.editedIngredient.name,
            amount: this.editedIngredient.amount
          })
        }
      );
  }

  checkForNumbers(control: FormControl): {[s: string] : boolean} {
  	let reg = new RegExp('^[1-9]+[0-9]*$');
  	if (!reg.test(control.value)) {
  		return { 'isANumber': true };
  	} 
  }

  onItemSubmit() {
    const updated = new Ingredient(this.ingredientsForm.value.amount, this.ingredientsForm.value.name);

    if (this.editMode) {
      this.ShopppingListService.updateIngredient(this.editedItemIndex, updated);
    } else {
      this.ShopppingListService.add(this.ingredientsForm.value.amount, this.ingredientsForm.value.name);
    }
    this.editMode = false;
    this.ingredientsForm.reset();
  }

  clearForm() {
    this.editMode = false;
    this.ingredientsForm.reset()
  }

  deleteIngredient() {
    this.clearForm();
    this.ShopppingListService.remove(this.editedItemIndex);
  }

 ngOnDestroy() {
   this.subscription.unsubscribe();
 }



}
