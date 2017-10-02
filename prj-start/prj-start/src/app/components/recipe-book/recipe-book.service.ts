import { EventEmitter } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { Ingredient } from '../../models/ingredient.model';



export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Schnitzel', 
            'delicious, juicy schnitzel',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG', 
            [
                new Ingredient('meat', 2),
                new Ingredient('fries', 20),
                new Ingredient('salt', 1)
            ]),
        new Recipe(
            'Burger', 
            'American Burger with beef minced meat',
            'https://upload.wikimedia.org/wikipedia/commons/7/7f/Hamburger_%282%29.jpg', 
            [
                new Ingredient('meat', 2),
                new Ingredient('bun', 1),
                new Ingredient('pickle', 1),
            ])
      ];

      // get the copy of Array of recipes
    getRecipes() {
        return this.recipes.slice();
    }  
}

