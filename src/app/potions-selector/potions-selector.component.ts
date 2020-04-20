import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';

import {Potion} from '../potion';

@Component({
  selector: 'app-potions-selector',
  templateUrl: './potions-selector.component.html',
  styleUrls: ['./potions-selector.component.css']
})
export class PotionsSelectorComponent implements OnInit {

  @Input()
  potions: Potion[];
  @Input()
  imageFolder: string;
  @Input()
  potionTitle: string;

  @Output()
  eventEmitter: EventEmitter<string> = new EventEmitter<string>();

  potionsCount: object[];

  constructor() {
    this.potionsCount = [];
  }

  ngOnInit(): void {
    // initializes potion count to 0 for each
    this.potions.forEach(potion => {
      this.potionsCount[potion.name] = 0;
    });
  }

  incrementPotion($event: MouseEvent, potion: Potion): void {
    this.potionsCount[potion.name] = this.potionsCount[potion.name] + 1;
    for (const ingredient of potion.ingredients) {
      this.eventEmitter.emit(ingredient);
    }
  }

  decrementPotion($event: MouseEvent, potion: Potion): boolean {
    // stops contextMenu from opening
    $event.preventDefault();
    if (this.potionsCount[potion.name] > 0) {
      this.potionsCount[potion.name] = this.potionsCount[potion.name] - 1;
    }
    // also stops contextMenu from opening
    return false;
  }
}
