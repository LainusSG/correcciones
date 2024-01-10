import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionProvedorExternoComponent } from './recepcion-provedor-externo.component';

describe('RecepcionProvedorExternoComponent', () => {
  let component: RecepcionProvedorExternoComponent;
  let fixture: ComponentFixture<RecepcionProvedorExternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecepcionProvedorExternoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecepcionProvedorExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
