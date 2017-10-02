import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../recipe-book/recipe-book.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
    @Input() recipe: Recipe;


    constructor (private recipeService: RecipeService) {}
    
    ngOnInit() {

    }

    onAddToShoppingList() {
        this.recipeService.addIngrToShoppingList(this.recipe.ingredients);
    }
}