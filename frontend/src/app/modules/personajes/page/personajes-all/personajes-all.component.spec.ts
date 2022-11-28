import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesAllComponent } from './personajes-all.component';

describe('PersonajesAllComponent', () => {
  let component: PersonajesAllComponent;
  let fixture: ComponentFixture<PersonajesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajesAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
