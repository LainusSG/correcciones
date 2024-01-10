import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionAlmacenComponent } from './recepcion-almacen.component';

describe('RecepcionAlmacenComponent', () => {
  let component: RecepcionAlmacenComponent;
  let fixture: ComponentFixture<RecepcionAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecepcionAlmacenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecepcionAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
