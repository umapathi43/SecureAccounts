import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountslabComponent } from './discountslab.component';

describe('DiscountslabComponent', () => {
  let component: DiscountslabComponent;
  let fixture: ComponentFixture<DiscountslabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountslabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountslabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
