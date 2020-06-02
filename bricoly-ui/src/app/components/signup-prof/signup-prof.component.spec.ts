import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupProfComponent } from './signup-prof.component';

describe('SignupProfComponent', () => {
  let component: SignupProfComponent;
  let fixture: ComponentFixture<SignupProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
