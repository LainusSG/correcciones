import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsidenciaComponent } from './insidencia.component';

describe('InsidenciaComponent', () => {
  let component: InsidenciaComponent;
  let fixture: ComponentFixture<InsidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsidenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
