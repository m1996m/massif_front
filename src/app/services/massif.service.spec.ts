import { TestBed } from '@angular/core/testing';

import { MassifService } from './massif.service';

describe('MassifService', () => {
  let service: MassifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MassifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
