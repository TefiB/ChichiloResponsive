import { TestBed } from '@angular/core/testing';

import { PlatilloService } from './platillo.service';

describe('PlatilloService', () => {
  let service: PlatilloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatilloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
