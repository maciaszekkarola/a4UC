import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 6),
    new Ingredient('Banana', 2),
    new Ingredient('Bread', 1)
  ];
 
  constructor() { }

  ngOnInit() {
  }
  itemAdded(ingrData: Ingredient) {
    this.ingredients.push(ingrData);
  }

}
