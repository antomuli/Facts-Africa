import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbuyersComponent } from './viewbuyers.component';

describe('ViewbuyersComponent', () => {
  let component: ViewbuyersComponent;
  let fixture: ComponentFixture<ViewbuyersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbuyersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbuyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
