import { EventEmitter } from '@angular/core';
import { Recipe } from '../../models/recipe.model';


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Jajecznica', 'test jajecznica',
        'https://pixabay.com/en/egg-sunny-side-up-fried-egg-155116/'),
        new Recipe('tost', 'test tost',
        'https://pixabay.com/en/egg-sunny-side-up-fried-egg-155116/')
      ];

      // get the copy of Array of recipes
    getRecipes() {
        return this.recipes.slice();
    }  
}