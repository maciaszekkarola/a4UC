import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
    new Recipe('Jajecznica', 'test jajecznica',
    'https://pixabay.com/en/egg-sunny-side-up-fried-egg-155116/'),
    new Recipe('tost', 'test tost',
    'https://pixabay.com/en/egg-sunny-side-up-fried-egg-155116/')
  ];
  @Output('recipeSelectedGrandpa') recipeSelectedGrandpa = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  //funkcja jako parametr otrzymuje recipe na wzór modelu Recipe, 
  // w wowołaniu jako argument pobiera recipeElement i daje prypisuje 
  //propsa które komunikuje się z dzieckiem [recipe] = "recipeElement"

  selectedRecipe(recipe: Recipe) {
    this.recipeSelectedGrandpa.emit(recipe);
  }
}
