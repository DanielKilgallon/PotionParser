import {Component} from '@angular/core';

import {PotionService} from './potion.service';
import {Potion} from './potion';

interface PotionList {
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: PotionList[];

  recoveryPotions: Potion[];
  recoveryFolderPath = 'Recovery%20Potions';
  recoveryTitle = 'Recovery Potions';

  teleportationPotions: Potion[];
  teleportationFolderPath = 'Teleportation%20Potions';
  teleportationTitle = 'Teleport Potions';

  cosmeticPotions: Potion[];
  cosmeticFolderPath = 'Cosmetic%20Potions';
  cosmeticTitle = 'Cosmetic Potions';

  buffPotions1: Potion[];
  buffFolderPath1 = 'Buff%20Potions';
  buffTitle1 = 'Buff Potions';

  buffPotions2: Potion[];
  buffFolderPath2 = 'Buff%20Potions';
  buffTitle2 = 'Buff Potions';

  ingredients = [];

  constructor(private potionService: PotionService) {
    document.body.style.backgroundImage = this.getBackground();

    // sets up potion data sources
    this.potionService.getRecoveryPotions().subscribe(potions => this.recoveryPotions = potions);
    this.potionService.getBuffPotions1().subscribe(potions => this.buffPotions1 = potions);
    this.potionService.getBuffPotions2().subscribe(potions => this.buffPotions2 = potions);
    this.potionService.getTeleportationPotions().subscribe(potions => this.teleportationPotions = potions);
    this.potionService.getCosmeticPotions().subscribe(potions => this.cosmeticPotions = potions);
  }

  getBackground(): string {
    const array = ['Blue_Mushroom_Biome', 'Corruption_Biome', 'Crimson_Biome', 'Forest_Biome', 'Hallow_Biome', 'Ice_Biome', 'Jungle_Biome',
      'Ocean_Biome', 'Sky_Biome'];
    const ranSpot = Math.floor(Math.random() * 9);
    const path = 'assets/images/Backgrounds/' + array[ranSpot] + '.png';
    return 'url(\'' + path + '\')';
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }

  removeIngredient(ingredient) {
    const index = this.ingredients.findIndex(item => item === ingredient);
    if (index > -1) {
      this.ingredients.splice(index, 1);
    }
  }

  clear() {
    window.location.reload();
  }
}
