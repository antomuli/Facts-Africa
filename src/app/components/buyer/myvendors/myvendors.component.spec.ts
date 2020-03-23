import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyvendorsComponent } from './myvendors.component';

describe('MyvendorsComponent', () => {
  let component: MyvendorsComponent;
  let fixture: ComponentFixture<MyvendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyvendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyvendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
