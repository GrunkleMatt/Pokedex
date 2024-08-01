import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexToolsBarComponent } from './pokedex-tools-bar.component';

describe('PokedexToolsBarComponent', () => {
  let component: PokedexToolsBarComponent;
  let fixture: ComponentFixture<PokedexToolsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokedexToolsBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokedexToolsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
