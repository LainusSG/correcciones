import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDeQuirofanoDistribucionComponent } from './material-de-quirofano-distribucion.component';

describe('MaterialDeQuirofanoDistribucionComponent', () => {
  let component: MaterialDeQuirofanoDistribucionComponent;
  let fixture: ComponentFixture<MaterialDeQuirofanoDistribucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialDeQuirofanoDistribucionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialDeQuirofanoDistribucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
