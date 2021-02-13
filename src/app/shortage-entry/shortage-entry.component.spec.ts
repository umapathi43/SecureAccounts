import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortageEntryComponent } from './shortage-entry.component';

describe('ShortageEntryComponent', () => {
  let component: ShortageEntryComponent;
  let fixture: ComponentFixture<ShortageEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortageEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortageEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
