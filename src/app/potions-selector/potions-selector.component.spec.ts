import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PotionsSelectorComponent } from './potions-selector.component';

describe('HealthPotionComponent', () => {
  let component: PotionsSelectorComponent;
  let fixture: ComponentFixture<PotionsSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PotionsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotionsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
