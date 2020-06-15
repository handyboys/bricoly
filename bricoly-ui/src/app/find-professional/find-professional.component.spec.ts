import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindProfessionalComponent } from './find-professional.component';

describe('FindProfessionalComponent', () => {
  let component: FindProfessionalComponent;
  let fixture: ComponentFixture<FindProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
