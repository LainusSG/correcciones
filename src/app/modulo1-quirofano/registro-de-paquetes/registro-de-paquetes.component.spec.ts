import { ComponentFixture, TestBed } from '@angular/core/testing';

import { REGISTRODEPAQUETESComponent } from './registro-de-paquetes.component';

describe('REGISTRODEPAQUETESComponent', () => {
  let component: REGISTRODEPAQUETESComponent;
  let fixture: ComponentFixture<REGISTRODEPAQUETESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [REGISTRODEPAQUETESComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(REGISTRODEPAQUETESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
