import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningStockEntryTableComponent } from './opening-stock-entry-table.component';

describe('OpeningStockEntryTableComponent', () => {
  let component: OpeningStockEntryTableComponent;
  let fixture: ComponentFixture<OpeningStockEntryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningStockEntryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningStockEntryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
