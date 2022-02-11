import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRiesgoVariableComponent } from './update-riesgo-variable.component';

describe('UpdateRiesgoVariableComponent', () => {
  let component: UpdateRiesgoVariableComponent;
  let fixture: ComponentFixture<UpdateRiesgoVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRiesgoVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRiesgoVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
