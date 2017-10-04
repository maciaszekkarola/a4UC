import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
    recipeSelectedEmitter = new EventEmitter<Recipe>();

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
                new Ingredient('pickle', 1)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

      // get the copy of Array of recipes
    getRecipes() {
        return this.recipes.slice();
    }

    // funckja potrzebna pobierania przepisu po indexie
    // Przepis pobrany w komponencie RecipeDetail poprzez subscribe(), 
    // ponieważ z listy po lewej caly czas mogę zmieniać wybrany przepis, dlatego nie mogę używać .snapshot
    getRecipe(index: number) {
        return this.recipes[index];
    }
    
    addIngrToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredientsToList(ingredients);

    }
}

