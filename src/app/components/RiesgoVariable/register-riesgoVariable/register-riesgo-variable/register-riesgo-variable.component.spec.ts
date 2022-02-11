import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRiesgoVariableComponent } from './register-riesgo-variable.component';

describe('RegisterRiesgoVariableComponent', () => {
  let component: RegisterRiesgoVariableComponent;
  let fixture: ComponentFixture<RegisterRiesgoVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterRiesgoVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRiesgoVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
