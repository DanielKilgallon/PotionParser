import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Potion } from './potion';
import { RECOVERY_POTIONS } from './potions-json/recovery-potions';
import { BUFF_POTIONS1 } from './potions-json/buff-potions-1';
import { BUFF_POTIONS2 } from './potions-json/buff-potions-2';
import { TELEPORTATION_POTIONS } from './potions-json/teleportation-potions';
import { COSMETIC_POTIONS } from './potions-json/cosmetic-potions';

@Injectable({ providedIn: 'root' })
export class PotionService {

  constructor() { }

  getRecoveryPotions(): Observable<Potion[]> {
    return of(RECOVERY_POTIONS);
  }

  getBuffPotions1(): Observable<Potion[]> {
    return of(BUFF_POTIONS1);
  }

  getBuffPotions2(): Observable<Potion[]> {
    return of(BUFF_POTIONS2);
  }

  getTeleportationPotions(): Observable<Potion[]> {
    return of(TELEPORTATION_POTIONS);
  }

  getCosmeticPotions(): Observable<Potion[]> {
    return of(COSMETIC_POTIONS);
  }
}
