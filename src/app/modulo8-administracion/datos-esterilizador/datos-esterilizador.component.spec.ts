import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEsterilizadorComponent } from './datos-esterilizador.component';

describe('DatosEsterilizadorComponent', () => {
  let component: DatosEsterilizadorComponent;
  let fixture: ComponentFixture<DatosEsterilizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatosEsterilizadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosEsterilizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
