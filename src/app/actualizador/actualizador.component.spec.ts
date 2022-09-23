import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizadorComponent } from './actualizador.component';

describe('ActualizadorComponent', () => {
  let component: ActualizadorComponent;
  let fixture: ComponentFixture<ActualizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
