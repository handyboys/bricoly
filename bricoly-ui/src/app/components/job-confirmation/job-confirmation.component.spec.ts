import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobConfirmationComponent } from './job-confirmation.component';

describe('JobConfirmationComponent', () => {
  let component: JobConfirmationComponent;
  let fixture: ComponentFixture<JobConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
