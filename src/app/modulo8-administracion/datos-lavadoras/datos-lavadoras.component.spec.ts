import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosLavadorasComponent } from './datos-lavadoras.component';

describe('DatosLavadorasComponent', () => {
  let component: DatosLavadorasComponent;
  let fixture: ComponentFixture<DatosLavadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatosLavadorasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosLavadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
