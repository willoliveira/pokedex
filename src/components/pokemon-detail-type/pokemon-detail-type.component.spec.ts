import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailTypeComponent } from './pokemon-detail-type.component';

describe('PokemonDetailTypeComponent', () => {
  let component: PokemonDetailTypeComponent;
  let fixture: ComponentFixture<PokemonDetailTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
