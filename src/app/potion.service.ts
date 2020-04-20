import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Potion } from './potion';
import { RECOVERY_POTIONS } from './potions-json/recovery-potions';
import { BUFF_POTIONS } from './potions-json/buff-potions';
import { OTHER_POTIONS } from './potions-json/other-potions';
import { INGREDIENTS } from './potions-json/ingredients';
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

  getOtherPotions(): Observable<Potion[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('PotionService: fetched other potions');
    return of(OTHER_POTIONS);
  }
}
