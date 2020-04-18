import { Component, OnInit } from '@angular/core';

import {Potion} from '../potion';
import {PotionService} from '../potion.service';

@Component({
  selector: 'app-recovery-potions',
  templateUrl: './recovery-potions.component.html',
  styleUrls: ['./recovery-potions.component.css']
})
export class RecoveryPotionsComponent implements OnInit {
  potions: Potion[];

  constructor(private potionService: PotionService) {
  }

  ngOnInit(): void {
    this.potionService.getBuffPotions().subscribe(potions => this.potions = potions);
  }
}
