import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';
import {  ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.nameInput, value.amountInput);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
