import { TestBed } from '@angular/core/testing';

import { ViewvendorsService } from './viewvendors.service';

describe('ViewvendorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewvendorsService = TestBed.get(ViewvendorsService);
    expect(service).toBeTruthy();
  });
});
