import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Door3InputComponent } from './door3-input.component';

describe('Door3InputComponent', () => {
  let component: Door3InputComponent;
  let fixture: ComponentFixture<Door3InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Door3InputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Door3InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
