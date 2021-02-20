import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesInvoiceEntryComponent } from './sales-invoice-entry.component';

describe('SalesInvoiceEntryComponent', () => {
  let component: SalesInvoiceEntryComponent;
  let fixture: ComponentFixture<SalesInvoiceEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesInvoiceEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesInvoiceEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
