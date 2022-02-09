import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVariableComponent } from './update-variable.component';

describe('UpdateVariableComponent', () => {
  let component: UpdateVariableComponent;
  let fixture: ComponentFixture<UpdateVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
