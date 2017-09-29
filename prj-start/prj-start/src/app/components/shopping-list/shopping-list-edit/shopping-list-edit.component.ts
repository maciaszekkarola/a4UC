import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() itemAddedEmitter = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  
  constructor() { }

  ngOnInit() {
  }
  onAdd(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.itemAddedEmitter.emit({
      name: this.nameInputRef.nativeElement.value,
      amount: this.amountInputRef.nativeElement.value
    });
  }

}
