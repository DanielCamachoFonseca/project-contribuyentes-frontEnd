import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRiesgoComponent } from './register-riesgo.component';

describe('RegisterRiesgoComponent', () => {
  let component: RegisterRiesgoComponent;
  let fixture: ComponentFixture<RegisterRiesgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterRiesgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
