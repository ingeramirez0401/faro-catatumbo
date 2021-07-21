import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineasServicioComponent } from './lineas-servicio.component';

describe('LineasServicioComponent', () => {
  let component: LineasServicioComponent;
  let fixture: ComponentFixture<LineasServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineasServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineasServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
