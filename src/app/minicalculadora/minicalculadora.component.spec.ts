import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinicalculadoraComponent } from './minicalculadora.component';

describe('MinicalculadoraComponent', () => {
  let component: MinicalculadoraComponent;
  let fixture: ComponentFixture<MinicalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinicalculadoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinicalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
