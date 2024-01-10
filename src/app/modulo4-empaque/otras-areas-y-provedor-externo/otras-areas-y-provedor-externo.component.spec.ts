import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrasAreasYProvedorExternoComponent } from './otras-areas-y-provedor-externo.component';

describe('OtrasAreasYProvedorExternoComponent', () => {
  let component: OtrasAreasYProvedorExternoComponent;
  let fixture: ComponentFixture<OtrasAreasYProvedorExternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtrasAreasYProvedorExternoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtrasAreasYProvedorExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
