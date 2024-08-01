import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokedex-tools-bar',
  templateUrl: './pokedex-tools-bar.component.html',
  styleUrl: './pokedex-tools-bar.component.scss'
})
export class PokedexToolsBarComponent {
  @Output() onClickOrder = new EventEmitter()
  @Input() searchForm?: FormGroup
  @Input() searchFormName: string = ""
}
