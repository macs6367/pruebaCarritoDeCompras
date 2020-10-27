import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProductoComponent } from './gestion-producto.component';

describe('GestionProductoComponent', () => {
  let component: GestionProductoComponent;
  let fixture: ComponentFixture<GestionProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
