import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaquetadoOtrosComponent } from './empaquetado-otros.component';

describe('EmpaquetadoOtrosComponent', () => {
  let component: EmpaquetadoOtrosComponent;
  let fixture: ComponentFixture<EmpaquetadoOtrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpaquetadoOtrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpaquetadoOtrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
