import { Recipe } from './../models/recipe.model';
import { RecipeService } from './../components/recipe-book/recipe-book.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()

export class DataStorageService {

    constructor(private http: Http,
                private recipeService: RecipeService) {} 

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
            )
    }

}
