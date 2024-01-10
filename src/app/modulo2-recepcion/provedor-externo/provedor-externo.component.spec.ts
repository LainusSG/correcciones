import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvedorExternoComponent } from './provedor-externo.component';

describe('ProvedorExternoComponent', () => {
  let component: ProvedorExternoComponent;
  let fixture: ComponentFixture<ProvedorExternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProvedorExternoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProvedorExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
