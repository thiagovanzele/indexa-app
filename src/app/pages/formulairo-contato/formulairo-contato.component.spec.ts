import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairoContatoComponent } from './formulairo-contato.component';

describe('FormulairoContatoComponent', () => {
  let component: FormulairoContatoComponent;
  let fixture: ComponentFixture<FormulairoContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulairoContatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulairoContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
