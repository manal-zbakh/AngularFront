import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionClientComponent } from './gestion-client.component';

describe('GestionClientComponent', () => {
  let component: GestionClientComponent;
  let fixture: ComponentFixture<GestionClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
