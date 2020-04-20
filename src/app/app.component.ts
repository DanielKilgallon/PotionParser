import {Component} from '@angular/core';

import {PotionService} from './potion.service';
import {Potion} from './potion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recoveryPotions: Potion[];
  recoveryFolderPath = 'Recovery%20Potions';
  recoveryTitle = 'Recovery Potions';

  buffPotions: Potion[];
  buffFolderPath = 'Buff%20Potions';
  buffTitle = 'Buff Potions';

  otherPotions: Potion[];
  otherFolderPath = 'Other%20Potions';
  otherTitle = 'Other Potions';

  ingredients = [];

  constructor(private potionService: PotionService) {
    document.body.style.backgroundImage = this.getBackground();

    // sets up potion data sources
    this.potionService.getRecoveryPotions().subscribe(potions => this.recoveryPotions = potions);
    this.potionService.getBuffPotions().subscribe(potions => this.buffPotions = potions);
    this.potionService.getOtherPotions().subscribe(potions => this.otherPotions = potions);
  }

  getBackground(): string {
    const array = ['Blue_Mushroom_Biome', 'Corruption_Biome', 'Crimson_Biome', 'Forest_Biome', 'Hallow_Biome', 'Ice_Biome', 'Jungle_Biome',
      'Ocean_Biome', 'Sky_Biome'];
    const ranSpot = Math.floor(Math.random() * 9);
    const path = 'assets/images/Backgrounds/' + array[ranSpot] + '.png';
    return 'url(\'' + path + '\')';
  }

  changeIngredientList(ingredientFromPotionArray) {
    this.ingredients.push(ingredientFromPotionArray);
  }
}
