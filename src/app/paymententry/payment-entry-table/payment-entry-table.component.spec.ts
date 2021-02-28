import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentEntryTableComponent } from './payment-entry-table.component';

describe('PaymentEntryTableComponent', () => {
  let component: PaymentEntryTableComponent;
  let fixture: ComponentFixture<PaymentEntryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentEntryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentEntryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
