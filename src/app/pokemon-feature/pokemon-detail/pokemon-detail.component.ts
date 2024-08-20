import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../pokemon-data-acces/models/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {
  @Input() pokemonResult?: Pokemon;
  @Output() buttonClicked = new EventEmitter<string>();
}
