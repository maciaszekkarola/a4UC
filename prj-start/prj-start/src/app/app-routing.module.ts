import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { RecipeEditComponent } from './components/recipe-book/recipe-edit/recipe-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeListComponent } from './components/recipe-book/recipe-list/recipe-list.component';
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';
import { HomeRecipeComponent } from './components/recipe-book/home-recipe/home-recipe.component';
import { RecipeDetailComponent } from './components/recipe-book/recipe-detail/recipe-detail.component';

// ważne by wszystkie dynamicznie ładujące się strony były na końcu, bo w przypadku
// new byłoby nieodnalezione przez angulara. czytanie z dołu do góry
const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipeBookComponent, children: [
      {path: '', component: HomeRecipeComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
      
    ]},
    {path: 'shoppingList', component: ShoppingListComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}