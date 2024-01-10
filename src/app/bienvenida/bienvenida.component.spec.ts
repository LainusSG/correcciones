import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BIENVENIDAComponent } from './bienvenida.component';

describe('BIENVENIDAComponent', () => {
  let component: BIENVENIDAComponent;
  let fixture: ComponentFixture<BIENVENIDAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BIENVENIDAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BIENVENIDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
