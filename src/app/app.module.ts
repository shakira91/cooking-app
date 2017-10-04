import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { FooterComponent } from './footer/footer.component';
import { ActualShoppingListEditComponent } from './shopping-list/actual-shopping-list-edit/actual-shopping-list-edit.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeService } from './recipe-book/recipe.service';
import { ShopppingListService } from './shopping-list/shopping-list.service';

import { AppRoutingModule } from './app-routing.module';
import { RecipeStarterComponent } from './recipe-book/recipe-starter/recipe-starter.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    FooterComponent,
    ActualShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirective,
    RecipeStarterComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
  RecipeService,
  ShopppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
