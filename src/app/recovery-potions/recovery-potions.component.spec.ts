import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryPotionsComponent } from './recovery-potions.component';

describe('HealthPotionComponent', () => {
  let component: RecoveryPotionsComponent;
  let fixture: ComponentFixture<RecoveryPotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryPotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryPotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
