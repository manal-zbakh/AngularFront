import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionComponent } from './gestion.component';

describe('GestionComponent', () => {
  let component: GestionComponent;
  let fixture: ComponentFixture<GestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
