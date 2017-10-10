import { Recipe } from './../../../models/recipe.model';
import { Ingredient } from './../../../models/ingredient.model';
import { RecipeService } from './../recipe-book.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
              private recipeService: RecipeService,
              private router: Router) { }

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
      let ingrName = new FormArray([]);

      if (this.editMode) {
        const recipe = this.recipeService.getRecipe(this.id);
        recipeName = recipe.name; 
        recipeImgPath = recipe.imagePath;
        description = recipe.description;

        if (recipe['ingredients']) {
          for (let ingredient of recipe.ingredients) {
            ingrName.push(
              new FormGroup({
                'name': new FormControl(ingredient.name, Validators.required),
                'amount': new FormControl(ingredient.amount, [
                  Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
              })
            );
          }
        }
      }

      this.recipeForm = new FormGroup({
        'name': new FormControl(recipeName, Validators.required),
        'imagePath': new FormControl(recipeImgPath, Validators.required),
        'description' : new FormControl(description, Validators.required),
        'ingredients': ingrName
      });
    }

    // ta metoda odpala się na przycisk SAVE ponieważ button ma type="submit"
    onSubmit() {
      const newRecipe = new Recipe(
        this.recipeForm.value['name'],
        this.recipeForm.value['description'],
        this.recipeForm.value['imagePath'],
        this.recipeForm.value['ingredients']);

      if (this.editMode) {
        this.recipeService.updateRecipe(this.id, newRecipe);
      } else {
        this.recipeService.addRecipe(newRecipe);
        this.router.navigate(['../'], {relativeTo: this.route});
      }
      this.onCancel();
    }

    //  nie ma wartości w new Form, bo dadaję nowy skladnik!
    onAddIngr() {
      (<FormArray>this.recipeForm.get('ingredients')).push(
        new FormGroup({
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null, [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
          ])
        })
      );
    }

    onDeleteIngrItem(index: number) {
      (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
      
    }

    // naviguje mnie do jednego poziomu wyżej 
    onCancel() {
      this.router.navigate(['../'], {relativeTo: this.route});
    }

    

    


}
