import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoOtrasComponent } from './prestamo-otras.component';

describe('PrestamoOtrasComponent', () => {
  let component: PrestamoOtrasComponent;
  let fixture: ComponentFixture<PrestamoOtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrestamoOtrasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrestamoOtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
