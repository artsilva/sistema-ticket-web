import { TestBed } from '@angular/core/testing';

import { RequestTypeService } from './request-type.service';

describe('RequestTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestTypeService = TestBed.get(RequestTypeService);
    expect(service).toBeTruthy();
  });
});
