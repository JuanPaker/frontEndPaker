import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperLaboralComponent } from './exper-laboral.component';

describe('ExperLaboralComponent', () => {
  let component: ExperLaboralComponent;
  let fixture: ComponentFixture<ExperLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperLaboralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
