import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAsesoresComponent } from './mostrar-asesores.component';

describe('MostrarAsesoresComponent', () => {
  let component: MostrarAsesoresComponent;
  let fixture: ComponentFixture<MostrarAsesoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarAsesoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarAsesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
