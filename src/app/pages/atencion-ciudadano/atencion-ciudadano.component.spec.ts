import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionCiudadanoComponent } from './atencion-ciudadano.component';

describe('AtencionCiudadanoComponent', () => {
  let component: AtencionCiudadanoComponent;
  let fixture: ComponentFixture<AtencionCiudadanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtencionCiudadanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtencionCiudadanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
