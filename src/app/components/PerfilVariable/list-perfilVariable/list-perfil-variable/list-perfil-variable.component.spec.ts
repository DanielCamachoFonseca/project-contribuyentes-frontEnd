import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPerfilVariableComponent } from './list-perfil-variable.component';

describe('ListPerfilVariableComponent', () => {
  let component: ListPerfilVariableComponent;
  let fixture: ComponentFixture<ListPerfilVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPerfilVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPerfilVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
