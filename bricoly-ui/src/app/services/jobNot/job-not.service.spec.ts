import { TestBed } from '@angular/core/testing';

import { JobNotService } from './job-not.service';

describe('JobNotService', () => {
  let service: JobNotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobNotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
