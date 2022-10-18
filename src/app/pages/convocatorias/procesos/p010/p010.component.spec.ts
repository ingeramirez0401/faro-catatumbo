import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P010Component } from './p010.component';

describe('P010Component', () => {
  let component: P010Component;
  let fixture: ComponentFixture<P010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P010Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
