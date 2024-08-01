import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pokedex-order-button',
  templateUrl: './pokedex-order-button.component.html',
  styleUrl: './pokedex-order-button.component.scss'
})
export class PokedexOrderButtonComponent {
  @Output() onClickOrder = new EventEmitter()
}
