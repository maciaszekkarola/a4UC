import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../../../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe[];
  @Output('recipeEmitter') recipeEmitter = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(event) {
    this.recipeEmitter.emit();
  }

}
