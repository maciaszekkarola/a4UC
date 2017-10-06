import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../../models/ingredient.model';

export class ShoppingListService {
    ingrChanged = new Subject<Ingredient[]>();
    startedEditing =  new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 6),
        new Ingredient('Banana', 2),
        new Ingredient('Bread', 1)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }
    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient( ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingrChanged.next(this.ingredients.slice());
    }
    
    // typ ingr[] - bo na jedeno danie sklada sie wiele skladnikow
    addIngredientsToList(ingredient: Ingredient[]) {
        this.ingredients.push(...ingredient);
        this.ingrChanged.next(this.ingredients.slice());
    }
   
    updateIngr(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingrChanged.next(this.ingredients.slice());
    }
}