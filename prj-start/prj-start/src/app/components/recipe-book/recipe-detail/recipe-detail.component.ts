import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../recipe-book/recipe-book.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
    recipe: Recipe;
    id:  number;

    constructor (private recipeService: RecipeService,
                private route: ActivatedRoute) {}
    
    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.recipe = this.recipeService.getRecipe(this.id);
                }
            );
    }

    onAddToShoppingList() {
        this.recipeService.addIngrToShoppingList(this.recipe.ingredients);
    }
}
