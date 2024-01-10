import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavadoOpc2Component } from './lavado-opc2.component';

describe('LavadoOpc2Component', () => {
  let component: LavadoOpc2Component;
  let fixture: ComponentFixture<LavadoOpc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LavadoOpc2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LavadoOpc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
