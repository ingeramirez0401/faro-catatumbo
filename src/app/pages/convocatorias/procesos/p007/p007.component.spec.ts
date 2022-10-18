import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P007Component } from './p007.component';

describe('P007Component', () => {
  let component: P007Component;
  let fixture: ComponentFixture<P007Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P007Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
