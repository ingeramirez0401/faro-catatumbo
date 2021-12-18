import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoOferentesComponent } from './banco-oferentes.component';

describe('BancoOferentesComponent', () => {
  let component: BancoOferentesComponent;
  let fixture: ComponentFixture<BancoOferentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancoOferentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoOferentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
