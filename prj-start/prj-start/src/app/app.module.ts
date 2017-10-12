import { AuthModule } from './components/auth/auth.module';
import { ShoppingModule } from './components/shopping-list/shopping.module';
import { SharedModule } from './shared/shared.module';
import { RecipesModule } from './components/recipe-book/recipes.module';
import { AppRoutingModule } from 'app/app-routing.module';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListService } from './components/shopping-list/shopping-list.service';
import { AuthService } from './components/auth/auth.service';
import { DataStorageService } from './shared/data-storage.service';
import { RecipeService } from './components/recipe-book/recipe-book.service';
import { AuthGuard } from './components/auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RecipesModule,
    ShoppingModule,
    AuthModule,
    SharedModule
  ],
  providers: [
    ShoppingListService, 
    RecipeService, 
    DataStorageService,
    AuthService, 
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
