import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esterilizacion2Component } from './esterilizacion-2.component';

describe('Esterilizacion2Component', () => {
  let component: Esterilizacion2Component;
  let fixture: ComponentFixture<Esterilizacion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Esterilizacion2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Esterilizacion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
