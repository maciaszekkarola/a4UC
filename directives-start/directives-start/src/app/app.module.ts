import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterDirective } from './directives/better.directive';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent, 
    BasicHighlightDirective, 
    BetterDirective, 
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
