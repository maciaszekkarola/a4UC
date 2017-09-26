import { Component, OnInit } from '@angular/core';
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
    new Recipe('Jajecznica', 'test jajecznica',
    'https://pixabay.com/en/egg-sunny-side-up-fried-egg-155116/')
  ];

  constructor() { }

  ngOnInit() {
  }

}
