import { TestBed } from '@angular/core/testing';

import { PerfilVariableService } from './perfil-variable.service';

describe('PerfilVariableService', () => {
  let service: PerfilVariableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilVariableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
