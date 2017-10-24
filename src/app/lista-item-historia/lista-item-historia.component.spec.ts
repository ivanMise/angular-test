import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemHistoriaComponent } from './lista-item-historia.component';

describe('ListaItemHistoriaComponent', () => {
  let component: ListaItemHistoriaComponent;
  let fixture: ComponentFixture<ListaItemHistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaItemHistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaItemHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
