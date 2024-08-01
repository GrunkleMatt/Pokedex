import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexOrderButtonComponent } from './pokedex-order-button.component';

describe('PokedexOrderButtonComponent', () => {
  let component: PokedexOrderButtonComponent;
  let fixture: ComponentFixture<PokedexOrderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokedexOrderButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokedexOrderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
