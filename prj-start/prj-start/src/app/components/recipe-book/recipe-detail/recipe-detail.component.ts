import { ActivatedRoute, Params, Router } from '@angular/router';
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
                private route: ActivatedRoute, 
                private router: Router) {}
    
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
    onEditRecipe() {
        // ponieważ zanim klinke przycisk edit  to juz jetsem na sciezke 0 albo 1 więc edit dodaje się do sciezki - relative path
        // jeśli chcialbym skorzystać z podejścia gdzie idę piętro wyżej, to wyglądałoby to tak:
        // this.router.navigate(['../', this.id, 'edit'], .....) ,musiałabym się odwołać do ID które jest inicjalizowane w OnInit
        this.router.navigate(['edit'], {relativeTo: this.route});
    }
}
