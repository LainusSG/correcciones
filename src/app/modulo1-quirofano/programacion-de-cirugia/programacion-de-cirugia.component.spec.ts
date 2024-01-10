import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PROGRAMACIONDECIRUGIAComponent } from './programacion-de-cirugia.component';

describe('PROGRAMACIONDECIRUGIAComponent', () => {
  let component: PROGRAMACIONDECIRUGIAComponent;
  let fixture: ComponentFixture<PROGRAMACIONDECIRUGIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PROGRAMACIONDECIRUGIAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PROGRAMACIONDECIRUGIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
