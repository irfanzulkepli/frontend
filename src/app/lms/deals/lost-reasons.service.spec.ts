import { TestBed } from '@angular/core/testing';

import { LostReasonsService } from './lost-reasons.service';

describe('LostReasonsService', () => {
  let service: LostReasonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LostReasonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
