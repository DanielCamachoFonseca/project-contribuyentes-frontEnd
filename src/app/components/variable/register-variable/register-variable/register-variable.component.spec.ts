import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVariableComponent } from './register-variable.component';

describe('RegisterVariableComponent', () => {
  let component: RegisterVariableComponent;
  let fixture: ComponentFixture<RegisterVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
