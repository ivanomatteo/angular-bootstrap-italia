import { TestBed } from '@angular/core/testing';

import { NgbtToastService } from './ngbt-toast.service';

describe('NgbtToastService', () => {
  let service: NgbtToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgbtToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
