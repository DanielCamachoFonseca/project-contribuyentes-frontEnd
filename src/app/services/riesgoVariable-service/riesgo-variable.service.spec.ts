import { TestBed } from '@angular/core/testing';

import { RiesgoVariableService } from './riesgo-variable.service';

describe('RiesgoVariableService', () => {
  let service: RiesgoVariableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiesgoVariableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
