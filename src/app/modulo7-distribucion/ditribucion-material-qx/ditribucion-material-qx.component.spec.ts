import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DitribucionMaterialQxComponent } from './ditribucion-material-qx.component';

describe('DitribucionMaterialQxComponent', () => {
  let component: DitribucionMaterialQxComponent;
  let fixture: ComponentFixture<DitribucionMaterialQxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DitribucionMaterialQxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DitribucionMaterialQxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
