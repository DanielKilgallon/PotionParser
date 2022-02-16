import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';

import {Potion} from '../potion';

@Component({
  selector: 'app-potions-selector',
  templateUrl: './potions-selector.component.html',
  styleUrls: ['./potions-selector.component.css']
})
export class PotionsSelectorComponent implements OnInit {

  @Input()
  potions: Potion[] = [];
  @Input()
  imageFolder: string = "";
  @Input()
  potionTitle: string = "";

  @Output()
  addIngredientEmitter: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  removeIngredientEmitter: EventEmitter<string> = new EventEmitter<string>();

  potionsCount = new Map();

  constructor() {
  }

  ngOnInit(): void {
    // initializes potion count to 0 for each
    this.potionsCount = new Map();
    this.potions.forEach(potion => {
      this.potionsCount.set(potion.name, 0);
    });
  }

  incrementPotion($event: MouseEvent, potion: Potion): void {
    if ($event.ctrlKey) {
      window.open( 'https://terraria.fandom.com/wiki/' + potion.name.replace(' ', '_') + '_Potion');
    } else if (this.potionsCount.get(potion.name) < 99) {
      this.potionsCount.set(potion.name, this.potionsCount.get(potion.name) + 1);
      for (const ingredient of potion.ingredients) {
        this.addIngredientEmitter.emit(ingredient);
      }
    }
  }

  decrementPotion($event: MouseEvent, potion: Potion): boolean {
    // stops contextMenu from opening
    $event.preventDefault();
    if (this.potionsCount.get(potion.name) > 0) {
      this.potionsCount.set(potion.name, this.potionsCount.get(potion.name) - 1);
      for (const ingredient of potion.ingredients) {
        this.removeIngredientEmitter.emit(ingredient);
      }
    }
    // also stops contextMenu from opening
    return false;
  }

  changeCount() {
    // figure out how to edit div value or something better
  }
}
