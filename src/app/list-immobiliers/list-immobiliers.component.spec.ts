import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImmobiliersComponent } from './list-immobiliers.component';

describe('ListImmobiliersComponent', () => {
  let component: ListImmobiliersComponent;
  let fixture: ComponentFixture<ListImmobiliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListImmobiliersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListImmobiliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
