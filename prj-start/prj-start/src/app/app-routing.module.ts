import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from 'app/components/shopping-list/shopping-list.component';

// lazy loading! w app module usuwam z importów RecipesModule i ShoppingModule żeby nie zostały
//  zaladowane przez webpacka przy ladowaniu strony!
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'recipes', loadChildren: './components/recipe-book/recipes.module#RecipesModule'},
    {path: 'shoppingList', component: ShoppingListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}