import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymententryComponent } from './paymententry.component';

describe('PaymententryComponent', () => {
  let component: PaymententryComponent;
  let fixture: ComponentFixture<PaymententryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymententryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymententryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
