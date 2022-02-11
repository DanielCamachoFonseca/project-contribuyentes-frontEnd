import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRiesgoVariableComponent } from './list-riesgo-variable.component';

describe('ListRiesgoVariableComponent', () => {
  let component: ListRiesgoVariableComponent;
  let fixture: ComponentFixture<ListRiesgoVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRiesgoVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRiesgoVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
