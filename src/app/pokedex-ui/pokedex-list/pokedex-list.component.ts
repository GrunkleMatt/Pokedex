import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokedexResult } from '../../pokedex-data-access/models/pokedex';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrl: './pokedex-list.component.scss'
})
export class PokedexListComponent {
  @Input() results?: PokedexResult[];
  @Output() scrolledEmited = new EventEmitter<void>()
}
