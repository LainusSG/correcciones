import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DATOSDEPROGRAMACIONComponent } from './datos-de-programacion.component';

describe('DATOSDEPROGRAMACIONComponent', () => {
  let component: DATOSDEPROGRAMACIONComponent;
  let fixture: ComponentFixture<DATOSDEPROGRAMACIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DATOSDEPROGRAMACIONComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DATOSDEPROGRAMACIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
