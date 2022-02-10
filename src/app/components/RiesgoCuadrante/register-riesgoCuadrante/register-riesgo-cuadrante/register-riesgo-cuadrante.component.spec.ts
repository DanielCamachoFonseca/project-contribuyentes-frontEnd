import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRiesgoCuadranteComponent } from './register-riesgo-cuadrante.component';

describe('RegisterRiesgoCuadranteComponent', () => {
  let component: RegisterRiesgoCuadranteComponent;
  let fixture: ComponentFixture<RegisterRiesgoCuadranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterRiesgoCuadranteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRiesgoCuadranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
