import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitpayoutComponent } from './submitpayout.component';

describe('SubmitpayoutComponent', () => {
  let component: SubmitpayoutComponent;
  let fixture: ComponentFixture<SubmitpayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitpayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitpayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
