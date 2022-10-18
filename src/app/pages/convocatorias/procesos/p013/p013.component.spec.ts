import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P013Component } from './p013.component';

describe('P013Component', () => {
  let component: P013Component;
  let fixture: ComponentFixture<P013Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P013Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
