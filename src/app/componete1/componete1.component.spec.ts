import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componete1Component } from './componete1.component';

describe('Componete1Component', () => {
  let component: Componete1Component;
  let fixture: ComponentFixture<Componete1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Componete1Component]
    });
    fixture = TestBed.createComponent(Componete1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
