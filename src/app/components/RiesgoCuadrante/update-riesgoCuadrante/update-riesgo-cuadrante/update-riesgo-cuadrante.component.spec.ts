import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRiesgoCuadranteComponent } from './update-riesgo-cuadrante.component';

describe('UpdateRiesgoCuadranteComponent', () => {
  let component: UpdateRiesgoCuadranteComponent;
  let fixture: ComponentFixture<UpdateRiesgoCuadranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRiesgoCuadranteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRiesgoCuadranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
