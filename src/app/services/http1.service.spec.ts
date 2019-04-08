import { TestBed } from '@angular/core/testing';

import { Http1Service } from './http1.service';

describe('Http1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Http1Service = TestBed.get(Http1Service);
    expect(service).toBeTruthy();
  });
});
