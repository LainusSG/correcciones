import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RECONOCIMIENTOFACIALComponent } from './reconocimiento-facial.component';

describe('RECONOCIMIENTOFACIALComponent', () => {
  let component: RECONOCIMIENTOFACIALComponent;
  let fixture: ComponentFixture<RECONOCIMIENTOFACIALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RECONOCIMIENTOFACIALComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RECONOCIMIENTOFACIALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
