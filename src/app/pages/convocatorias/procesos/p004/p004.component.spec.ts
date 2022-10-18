import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P004Component } from './p004.component';

describe('P004Component', () => {
  let component: P004Component;
  let fixture: ComponentFixture<P004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P004Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
