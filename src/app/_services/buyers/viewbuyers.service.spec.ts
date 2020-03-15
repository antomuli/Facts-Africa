import { TestBed } from '@angular/core/testing';

import { ViewbuyersService } from './viewbuyers.service';

describe('ViewbuyersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewbuyersService = TestBed.get(ViewbuyersService);
    expect(service).toBeTruthy();
  });
});
