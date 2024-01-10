import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaDeInstrumentalHComponent } from './alta-de-instrumental-h.component';

describe('AltaDeInstrumentalHComponent', () => {
  let component: AltaDeInstrumentalHComponent;
  let fixture: ComponentFixture<AltaDeInstrumentalHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltaDeInstrumentalHComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltaDeInstrumentalHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
