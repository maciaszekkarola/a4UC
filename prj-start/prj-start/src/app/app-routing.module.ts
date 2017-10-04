import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeListComponent } from './components/recipe-book/recipe-list/recipe-list.component';
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';
import { HomeRecipeComponent } from './components/recipe-book/home-recipe/home-recipe.component';
import { RecipeDetailComponent } from './components/recipe-book/recipe-detail/recipe-detail.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipeBookComponent, children: [
      {path: '', component: HomeRecipeComponent},
      {path: ':id', component: RecipeDetailComponent}
      
    ]},
    {path: 'shoppingList', component: ShoppingListComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}