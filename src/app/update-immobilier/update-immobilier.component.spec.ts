import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateImmobilierComponent } from './update-immobilier.component';

describe('UpdateImmobilierComponent', () => {
  let component: UpdateImmobilierComponent;
  let fixture: ComponentFixture<UpdateImmobilierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateImmobilierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
