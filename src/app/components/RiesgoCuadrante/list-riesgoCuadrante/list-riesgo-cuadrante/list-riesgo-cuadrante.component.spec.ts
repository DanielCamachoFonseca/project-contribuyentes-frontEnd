import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRiesgoCuadranteComponent } from './list-riesgo-cuadrante.component';

describe('ListRiesgoCuadranteComponent', () => {
  let component: ListRiesgoCuadranteComponent;
  let fixture: ComponentFixture<ListRiesgoCuadranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRiesgoCuadranteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRiesgoCuadranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
