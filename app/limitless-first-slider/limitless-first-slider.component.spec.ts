import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitlessFirstSliderComponent } from './limitless-first-slider.component';

describe('LimitlessFirstSliderComponent', () => {
  let component: LimitlessFirstSliderComponent;
  let fixture: ComponentFixture<LimitlessFirstSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimitlessFirstSliderComponent]
    });
    fixture = TestBed.createComponent(LimitlessFirstSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
