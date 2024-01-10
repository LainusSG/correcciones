import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrasAreasYProveedorYExternoComponent } from './otras-areas-y-proveedor-y-externo.component';

describe('OtrasAreasYProveedorYExternoComponent', () => {
  let component: OtrasAreasYProveedorYExternoComponent;
  let fixture: ComponentFixture<OtrasAreasYProveedorYExternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtrasAreasYProveedorYExternoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtrasAreasYProveedorYExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
