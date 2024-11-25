import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalWorkComponent } from './total-work.component';

describe('TotalWorkComponent', () => {
  let component: TotalWorkComponent;
  let fixture: ComponentFixture<TotalWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalWorkComponent]
    });
    fixture = TestBed.createComponent(TotalWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
