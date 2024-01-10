import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionOtras2Component } from './recepcion-otras-2.component';

describe('RecepcionOtras2Component', () => {
  let component: RecepcionOtras2Component;
  let fixture: ComponentFixture<RecepcionOtras2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecepcionOtras2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecepcionOtras2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
