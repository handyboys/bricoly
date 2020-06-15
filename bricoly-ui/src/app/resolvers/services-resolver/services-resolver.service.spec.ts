import { TestBed } from '@angular/core/testing';

import { ServicesResolverService } from './services-resolver.service';

describe('ServicesResolverService', () => {
  let service: ServicesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
