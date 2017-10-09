import { RecipeService } from './../recipe-book.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  private id: number;
  private editMode = false;
  private recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) { }

  // +params['id'] - w appRouting odnosze się do :id
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );

  }

  //  tworzę funkję która inicjuje formularz do wprowadzania/edytowania 
  // przepisów. Sprawdzam czy jestem w edit mode, jesli tak to wrzucam w inputy
  //  te informacje ktore dotyczą edytpowanego przepisu, jeśli nie, to inpuity są puste
  // ważne jest gdzie sie inicjujue metodę! Jets to uzależnione od route.params, więc powinno się 
  // znalesc w onInit

    private initForm() {
      let recipeName = '';
      let recipeImgPath = '';
      let description = '';
      let ingrName = '';
      let amount;

      if (this.editMode) {
        const recipe = this.recipeService.getRecipe(this.id);
        recipeName = recipe.name; 
        recipeImgPath = recipe.imagePath;
        description = recipe.description;
        ingrName = recipe.ingredients['name'];
        amount = recipe.ingredients[amount];
      }

      this.recipeForm = new FormGroup({
        'name': new FormControl(recipeName),
        'imagePath': new FormControl(recipeImgPath),
        'description' : new FormControl(description),
        'ingrName' : new FormControl(),
        'amount' : new FormControl(1)
      });
    }


}
