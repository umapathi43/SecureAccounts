import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhsnsacComponent } from './addhsnsac.component';

describe('AddhsnsacComponent', () => {
  let component: AddhsnsacComponent;
  let fixture: ComponentFixture<AddhsnsacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhsnsacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhsnsacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
