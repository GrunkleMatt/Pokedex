import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexNotFoundComponent } from './pokedex-not-found.component';

describe('PokedexNotFoundComponent', () => {
  let component: PokedexNotFoundComponent;
  let fixture: ComponentFixture<PokedexNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokedexNotFoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokedexNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
