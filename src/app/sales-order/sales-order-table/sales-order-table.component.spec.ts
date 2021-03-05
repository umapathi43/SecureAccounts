import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrderTableComponent } from './sales-order-table.component';

describe('SalesOrderTableComponent', () => {
  let component: SalesOrderTableComponent;
  let fixture: ComponentFixture<SalesOrderTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesOrderTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
