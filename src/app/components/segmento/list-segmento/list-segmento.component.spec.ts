import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSegmentoComponent } from './list-segmento.component';

describe('ListSegmentoComponent', () => {
  let component: ListSegmentoComponent;
  let fixture: ComponentFixture<ListSegmentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSegmentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSegmentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
