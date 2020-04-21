import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {

  ingredientsObj: { [key: string]: number };

  @Input()
  ingredients: string[];

  constructor() {
  }

  ingredientsGet(): { [key: string]: number } {
    this.ingredientsObj = {};
    for (const ingredient of this.ingredients) {
      if (isNaN(this.ingredientsObj[ingredient])) {
        this.ingredientsObj[ingredient] = 1;
      } else {
        this.ingredientsObj[ingredient] = this.ingredientsObj[ingredient] + 1;
      }
    }
    return this.ingredientsObj;
  }
}
