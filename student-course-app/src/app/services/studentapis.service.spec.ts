import { TestBed } from '@angular/core/testing';

import { StudentapisService } from './studentapis.service';

describe('StudentapisService', () => {
  let service: StudentapisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentapisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
