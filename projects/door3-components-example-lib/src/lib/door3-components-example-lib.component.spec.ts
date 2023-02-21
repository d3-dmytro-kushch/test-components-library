import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Door3ComponentsExampleLibComponent } from './door3-components-example-lib.component';

describe('Door3ComponentsExampleLibComponent', () => {
  let component: Door3ComponentsExampleLibComponent;
  let fixture: ComponentFixture<Door3ComponentsExampleLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Door3ComponentsExampleLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Door3ComponentsExampleLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
