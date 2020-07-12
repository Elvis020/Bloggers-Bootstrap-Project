import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTry1Component } from './login-try1.component';

describe('LoginTry1Component', () => {
  let component: LoginTry1Component;
  let fixture: ComponentFixture<LoginTry1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTry1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTry1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
