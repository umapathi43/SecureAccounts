import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddiscountslabComponent } from './adddiscountslab.component';

describe('AdddiscountslabComponent', () => {
  let component: AdddiscountslabComponent;
  let fixture: ComponentFixture<AdddiscountslabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddiscountslabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddiscountslabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
