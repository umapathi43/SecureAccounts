import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSaleTableComponent } from './counter-sale-table.component';

describe('CounterSaleTableComponent', () => {
  let component: CounterSaleTableComponent;
  let fixture: ComponentFixture<CounterSaleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterSaleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterSaleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
