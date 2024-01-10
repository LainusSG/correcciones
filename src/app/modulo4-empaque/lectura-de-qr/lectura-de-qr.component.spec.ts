import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturaDeQrComponent } from './lectura-de-qr.component';

describe('LecturaDeQrComponent', () => {
  let component: LecturaDeQrComponent;
  let fixture: ComponentFixture<LecturaDeQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LecturaDeQrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LecturaDeQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
