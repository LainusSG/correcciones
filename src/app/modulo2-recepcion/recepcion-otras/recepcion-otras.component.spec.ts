import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionOtrasComponent } from './recepcion-otras.component';

describe('RecepcionOtrasComponent', () => {
  let component: RecepcionOtrasComponent;
  let fixture: ComponentFixture<RecepcionOtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecepcionOtrasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecepcionOtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
