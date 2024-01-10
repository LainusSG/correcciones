import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaDeInstrumentalComponent } from './alta-de-instrumental.component';

describe('AltaDeInstrumentalComponent', () => {
  let component: AltaDeInstrumentalComponent;
  let fixture: ComponentFixture<AltaDeInstrumentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltaDeInstrumentalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltaDeInstrumentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
