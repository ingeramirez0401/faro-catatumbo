import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P008Component } from './p008.component';

describe('P008Component', () => {
  let component: P008Component;
  let fixture: ComponentFixture<P008Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P008Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
