import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectJobLocationComponent } from './select-job-location.component';

describe('SelectJobLocationComponent', () => {
  let component: SelectJobLocationComponent;
  let fixture: ComponentFixture<SelectJobLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectJobLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectJobLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
