import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDeQuirofanoyCEyEComponent } from './material-de-quirofanoy-cey-e.component';

describe('MaterialDeQuirofanoyCEyEComponent', () => {
  let component: MaterialDeQuirofanoyCEyEComponent;
  let fixture: ComponentFixture<MaterialDeQuirofanoyCEyEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialDeQuirofanoyCEyEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialDeQuirofanoyCEyEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
