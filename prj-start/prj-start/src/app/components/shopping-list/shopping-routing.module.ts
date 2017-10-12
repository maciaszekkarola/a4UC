import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from 'app/components/shopping-list/shopping-list.component';

const shoppingRoutes: Routes = [
    {path: 'shoppingList', component: ShoppingListComponent}

]

@NgModule({
    imports: [RouterModule.forChild(shoppingRoutes)],
    exports: [RouterModule]
})

export class ShoppingRoutingModule {

}