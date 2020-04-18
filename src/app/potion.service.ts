import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Potion } from './potion';
import { RECOVERY_POTIONS } from './potions-json/recovery-potions';
import { BUFF_POTIONS } from './potions-json/buff-potions';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class PotionService {

  constructor(private messageService: MessageService) { }

  getRecoveryPotions(): Observable<Potion[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('PotionService: fetched recovery potions');

    return of(RECOVERY_POTIONS);
  }

  getBuffPotions(): Observable<Potion[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('PotionService: fetched buff potions');

    return of(BUFF_POTIONS);
  }

  getPotion(id: number): Observable<Potion> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`PotionService: fetched potion name=${name}`);

    if (RECOVERY_POTIONS.find(potion => potion.name === name)) {
      return of(RECOVERY_POTIONS.find(potion => potion.name === name));
    } else if (RECOVERY_POTIONS.find(potion => potion.name === name)) {
      return of(RECOVERY_POTIONS.find(potion => potion.name === name));
    } else if (RECOVERY_POTIONS.find(potion => potion.name === name)) {
      return of(RECOVERY_POTIONS.find(potion => potion.name === name));
    }

  }
}
