import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFuenteInformacionComponent } from './list-fuente-informacion.component';

describe('ListFuenteInformacionComponent', () => {
  let component: ListFuenteInformacionComponent;
  let fixture: ComponentFixture<ListFuenteInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFuenteInformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFuenteInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
