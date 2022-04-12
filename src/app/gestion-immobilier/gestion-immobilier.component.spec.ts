import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionImmobilierComponent } from './gestion-immobilier.component';

describe('GestionImmobilierComponent', () => {
  let component: GestionImmobilierComponent;
  let fixture: ComponentFixture<GestionImmobilierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionImmobilierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
