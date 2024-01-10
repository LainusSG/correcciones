import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionOtrasComponent } from './distribucion-otras.component';

describe('DistribucionOtrasComponent', () => {
  let component: DistribucionOtrasComponent;
  let fixture: ComponentFixture<DistribucionOtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistribucionOtrasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistribucionOtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
