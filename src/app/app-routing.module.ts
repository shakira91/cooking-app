import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeStarterComponent } from './recipe-book/recipe-starter/recipe-starter.component'
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component'

const appRoutes: Routes = [
  { path: 'recipes', component: RecipeBookComponent, children: [
  	{ path: '', component: RecipeStarterComponent },
  	{ path: 'new-recipe', component: RecipeEditComponent },
  	{ path: ':id', component: RecipeDetailComponent },
  	{ path: ':id/edit', component: RecipeEditComponent },
  	] },
  { path: 'shopping-list', component: ShoppingListComponent },
  //{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: '**', redirectTo: '/recipes', pathMatch: 'full' }
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule {


}