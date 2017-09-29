import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('emitterRecipe') emitterRecipe = new EventEmitter<{recipeActive: boolean, shoppingListActive: boolean }>();
  @Output('emitterShopping') emitterShopping = new EventEmitter<{recipeActive: boolean, shoppingListActive: boolean }>();
  
  constructor() { }

  ngOnInit() {
  }

  displayRecipes() {
    this.emitterRecipe.emit({
      recipeActive: true,
      shoppingListActive: false
    });
  }

  displayShoppingList() {
    this.emitterShopping.emit({
      recipeActive: false,
      shoppingListActive: true
    });

  }

}
