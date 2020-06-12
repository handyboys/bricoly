import { TestBed } from '@angular/core/testing';

import { FindProfessionalService } from './find-professional.service';

describe('FindProfessionalService', () => {
  let service: FindProfessionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindProfessionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
