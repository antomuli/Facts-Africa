import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvendorsComponent } from './viewvendors.component';

describe('ViewvendorsComponent', () => {
  let component: ViewvendorsComponent;
  let fixture: ComponentFixture<ViewvendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewvendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
