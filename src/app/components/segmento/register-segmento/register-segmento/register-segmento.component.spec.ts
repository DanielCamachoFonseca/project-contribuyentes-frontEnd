import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSegmentoComponent } from './register-segmento.component';

describe('RegisterSegmentoComponent', () => {
  let component: RegisterSegmentoComponent;
  let fixture: ComponentFixture<RegisterSegmentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSegmentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSegmentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
