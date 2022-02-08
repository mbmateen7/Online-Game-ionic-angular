import { TestBed } from '@angular/core/testing';

import { HomeGuardServiceService } from './home-guard-service.service';

describe('HomeGuardServiceService', () => {
  let service: HomeGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
