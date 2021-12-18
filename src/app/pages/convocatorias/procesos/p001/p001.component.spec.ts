import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P001Component } from './p001.component';

describe('P001Component', () => {
  let component: P001Component;
  let fixture: ComponentFixture<P001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
