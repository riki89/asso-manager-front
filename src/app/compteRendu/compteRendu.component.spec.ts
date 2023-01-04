import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteRenduComponent } from './compteRendu.component';

describe('CompteRenduComponent', () => {
  let component: CompteRenduComponent;
  let fixture: ComponentFixture<CompteRenduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteRenduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteRenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
