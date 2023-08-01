import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagesCardComponent } from './advantages-card.component';

describe('AdvantagesCardComponent', () => {
  let component: AdvantagesCardComponent;
  let fixture: ComponentFixture<AdvantagesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvantagesCardComponent]
    });
    fixture = TestBed.createComponent(AdvantagesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
