import { TestBed } from '@angular/core/testing';

import { DepartmentInfoService } from './department-info.service';

describe('DepartmentInfoService', () => {
  let service: DepartmentInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
