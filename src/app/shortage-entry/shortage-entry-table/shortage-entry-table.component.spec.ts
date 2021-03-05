import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortageEntryTableComponent } from './shortage-entry-table.component';

describe('ShortageEntryTableComponent', () => {
  let component: ShortageEntryTableComponent;
  let fixture: ComponentFixture<ShortageEntryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortageEntryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortageEntryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
