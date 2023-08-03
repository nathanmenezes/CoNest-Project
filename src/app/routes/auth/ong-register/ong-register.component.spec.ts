import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngRegisterComponent } from './ong-register.component';

describe('OngRegisterComponent', () => {
  let component: OngRegisterComponent;
  let fixture: ComponentFixture<OngRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OngRegisterComponent]
    });
    fixture = TestBed.createComponent(OngRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
