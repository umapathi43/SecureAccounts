import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstoretypeComponent } from './addstoretype.component';

describe('AddstoretypeComponent', () => {
  let component: AddstoretypeComponent;
  let fixture: ComponentFixture<AddstoretypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstoretypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstoretypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
