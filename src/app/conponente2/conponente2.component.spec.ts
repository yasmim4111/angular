import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conponente2Component } from './conponente2.component';

describe('Conponente2Component', () => {
  let component: Conponente2Component;
  let fixture: ComponentFixture<Conponente2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Conponente2Component]
    });
    fixture = TestBed.createComponent(Conponente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
