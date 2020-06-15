import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobNotComponent } from './job-not.component';

describe('JobNotComponent', () => {
  let component: JobNotComponent;
  let fixture: ComponentFixture<JobNotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobNotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
