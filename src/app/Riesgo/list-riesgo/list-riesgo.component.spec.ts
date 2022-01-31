import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRiesgoComponent } from './list-riesgo.component';

describe('ListRiesgoComponent', () => {
  let component: ListRiesgoComponent;
  let fixture: ComponentFixture<ListRiesgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRiesgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
