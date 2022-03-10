import { TestBed } from '@angular/core/testing';

import { PipelinesServiceService } from './pipelines-service.service';

describe('PipelinesServiceService', () => {
  let service: PipelinesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PipelinesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
