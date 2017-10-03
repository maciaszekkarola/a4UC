import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from './recipe-book.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelectedEmitter
    .subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }


}
