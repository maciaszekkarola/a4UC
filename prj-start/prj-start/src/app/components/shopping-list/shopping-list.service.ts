import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../../models/ingredient.model';

export class ShoppingListService {
    ingrChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 6),
        new Ingredient('Banana', 2),
        new Ingredient('Bread', 1)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient( ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingrChanged.next(this.ingredients.slice());
    }

    addIngredientsToList(ingredient: Ingredient[]) {
        this.ingredients.push(...ingredient);
        this.ingrChanged.next(this.ingredients.slice())
    }
   
}