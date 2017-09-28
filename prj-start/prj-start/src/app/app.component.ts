import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipe= false;
  showShoppingList= false;
  


  enableRecipe(emitterRecipe: {recipeActive: boolean, shoppingListActive: boolean}){
    this.showRecipe = true;
    this.showShoppingList = false;
    
  }
  enableShoppingList(emitterShopiing: {recipeActive: boolean, shoppingListActive: boolean}){
    this.showShoppingList = true;
    this.showRecipe = false;
   
  }


}
