import { Ingredient } from './../models/ingredient.model';
import { Recipe } from './../models/recipe.model';
import { RecipeService } from './../components/recipe-book/recipe-book.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { ShoppingListService } from 'app/components/shopping-list/shopping-list.service';

@Injectable()

export class DataStorageService {

    constructor(private http: Http,
                private recipeService: RecipeService,
                private slService: ShoppingListService) {} 

    storeRecipes() {
        return this.http.put('https://recipe-book-c850b.firebaseio.com/recipes.json', 
        this.recipeService.getRecipes() );
    }

    fetchRecipes() {
        return this.http.get('https://recipe-book-c850b.firebaseio.com/recipes.json')
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }

    storeShopingList() {
        return this.http.put('https://recipe-book-c850b.firebaseio.com/shoppingList.json', 
        this.slService.getIngredients() );
    }

    fetchShoppingList() {
        return this.http.get('https://recipe-book-c850b.firebaseio.com/shoppingList.json')
            .map(
                (response: Response) => {
                    const ingredients: Ingredient[] = response.json();
                    return ingredients;
                }
            )
            .subscribe(
                (ingredients: Ingredient[]) => {
                    this.slService.setIngredients(ingredients);
                }
            );
    }

}
