import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P009Component } from './p009.component';

describe('P009Component', () => {
  let component: P009Component;
  let fixture: ComponentFixture<P009Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P009Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
