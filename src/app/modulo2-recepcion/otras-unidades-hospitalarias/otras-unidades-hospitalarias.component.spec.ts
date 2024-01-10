import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrasUnidadesHospitalariasComponent } from './otras-unidades-hospitalarias.component';

describe('OtrasUnidadesHospitalariasComponent', () => {
  let component: OtrasUnidadesHospitalariasComponent;
  let fixture: ComponentFixture<OtrasUnidadesHospitalariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtrasUnidadesHospitalariasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtrasUnidadesHospitalariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
