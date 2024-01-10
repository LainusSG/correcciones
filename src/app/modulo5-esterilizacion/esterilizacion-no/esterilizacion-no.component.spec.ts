import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsterilizacionNoComponent } from './esterilizacion-no.component';

describe('EsterilizacionNoComponent', () => {
  let component: EsterilizacionNoComponent;
  let fixture: ComponentFixture<EsterilizacionNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsterilizacionNoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EsterilizacionNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
