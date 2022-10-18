import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P012Component } from './p012.component';

describe('P012Component', () => {
  let component: P012Component;
  let fixture: ComponentFixture<P012Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P012Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
