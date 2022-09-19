import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaEmpleadosComponent } from './caja-empleados.component';

describe('CajaEmpleadosComponent', () => {
  let component: CajaEmpleadosComponent;
  let fixture: ComponentFixture<CajaEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajaEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
