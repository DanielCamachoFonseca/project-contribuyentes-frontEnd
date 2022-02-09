import { TestBed } from '@angular/core/testing';

import { RiesgoCuadranteService } from './riesgo-cuadrante.service';

describe('RiesgoCuadranteService', () => {
  let service: RiesgoCuadranteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiesgoCuadranteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
