import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerinvoiceComponent } from './buyerinvoice.component';

describe('BuyerinvoiceComponent', () => {
  let component: BuyerinvoiceComponent;
  let fixture: ComponentFixture<BuyerinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
