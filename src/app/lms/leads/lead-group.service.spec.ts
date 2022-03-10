import { TestBed } from '@angular/core/testing';

import { LeadGroupService } from './lead-group.service';

describe('LeadGroupService', () => {
  let service: LeadGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
