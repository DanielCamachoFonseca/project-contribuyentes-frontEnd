import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRiesgoComponent } from './update-riesgo.component';

describe('UpdateRiesgoComponent', () => {
  let component: UpdateRiesgoComponent;
  let fixture: ComponentFixture<UpdateRiesgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRiesgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
