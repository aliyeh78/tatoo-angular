import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTattoosComponent } from './our-tattoos.component';

describe('OurTattoosComponent', () => {
  let component: OurTattoosComponent;
  let fixture: ComponentFixture<OurTattoosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurTattoosComponent]
    });
    fixture = TestBed.createComponent(OurTattoosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
