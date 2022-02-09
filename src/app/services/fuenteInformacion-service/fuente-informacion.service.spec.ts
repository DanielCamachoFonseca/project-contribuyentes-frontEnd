import { TestBed } from '@angular/core/testing';

import { FuenteInformacionService } from './fuente-informacion.service';

describe('FuenteInformacionService', () => {
  let service: FuenteInformacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuenteInformacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
