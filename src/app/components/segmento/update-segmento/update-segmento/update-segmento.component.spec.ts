import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSegmentoComponent } from './update-segmento.component';

describe('UpdateSegmentoComponent', () => {
  let component: UpdateSegmentoComponent;
  let fixture: ComponentFixture<UpdateSegmentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSegmentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSegmentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
