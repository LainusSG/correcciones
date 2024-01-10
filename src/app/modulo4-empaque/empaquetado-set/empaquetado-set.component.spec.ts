import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaquetadoSetComponent } from './empaquetado-set.component';

describe('EmpaquetadoSetComponent', () => {
  let component: EmpaquetadoSetComponent;
  let fixture: ComponentFixture<EmpaquetadoSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpaquetadoSetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpaquetadoSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
