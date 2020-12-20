import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsnsacComponent } from './hsnsac.component';

describe('HsnsacComponent', () => {
  let component: HsnsacComponent;
  let fixture: ComponentFixture<HsnsacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsnsacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsnsacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
