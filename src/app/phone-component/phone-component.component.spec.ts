import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneComponentComponent } from './phone-component.component';

describe('PhoneComponentComponent', () => {
  let component: PhoneComponentComponent;
  let fixture: ComponentFixture<PhoneComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneComponentComponent]
    });
    fixture = TestBed.createComponent(PhoneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
