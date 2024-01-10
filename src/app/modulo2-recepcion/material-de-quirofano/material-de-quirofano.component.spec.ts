import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDeQuirofanoComponent } from './material-de-quirofano.component';

describe('MaterialDeQuirofanoComponent', () => {
  let component: MaterialDeQuirofanoComponent;
  let fixture: ComponentFixture<MaterialDeQuirofanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialDeQuirofanoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialDeQuirofanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
