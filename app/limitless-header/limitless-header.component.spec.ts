import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitlessHeaderComponent } from './limitless-header.component';

describe('LimitlessHeaderComponent', () => {
  let component: LimitlessHeaderComponent;
  let fixture: ComponentFixture<LimitlessHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimitlessHeaderComponent]
    });
    fixture = TestBed.createComponent(LimitlessHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
