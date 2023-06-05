import { TestBed } from '@angular/core/testing';

import { InveServiceService } from './inve-service.service';

describe('InveServiceService', () => {
  let service: InveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
