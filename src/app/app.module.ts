import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { PotionsSelectorComponent } from './potions-selector/potions-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    PotionsSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
