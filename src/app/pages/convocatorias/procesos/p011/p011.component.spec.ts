import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P011Component } from './p011.component';

describe('P011Component', () => {
  let component: P011Component;
  let fixture: ComponentFixture<P011Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P011Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
