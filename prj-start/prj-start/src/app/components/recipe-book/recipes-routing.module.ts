import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { HomeRecipeComponent } from './home-recipe/home-recipe.component';
import { RecipeBookComponent } from 'app/components/recipe-book/recipe-book.component';
import { AuthGuard } from 'app/components/auth/auth-guard.service';

// ważne by wszystkie dynamicznie ładujące się strony były na końcu, bo w przypadku
// new byłoby nieodnalezione przez angulara. czytanie z dołu do góry
const recipesRoutes: Routes = [
    {path: 'recipes', component: RecipeBookComponent, children: [
        {path: '', component: HomeRecipeComponent},
        {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
    ]},
];


@NgModule({
    imports: [RouterModule.forChild(recipesRoutes)],
    exports: [RouterModule]
})

export class RecipesRoutingModule {

}