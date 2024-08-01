import { Component, Input } from '@angular/core';
import { PokedexCard, PokedexResult } from '../../pokedex-data-access/models/pokedex';

@Component({
  selector: 'app-pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrl: './pokedex-card.component.scss'
})
export class PokedexCardComponent {
  @Input() cardResults?: PokedexCard;
  @Input() id: number=0;
}
