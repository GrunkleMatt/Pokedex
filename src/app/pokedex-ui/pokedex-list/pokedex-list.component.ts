import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { PokedexCard, PokedexResult } from '../../pokedex-data-access/models/pokedex';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrl: './pokedex-list.component.scss'
})
export class PokedexListComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    this.isLoaded.emit()
  }
  @Input() cardResults?: PokedexCard[];
  @Output() scrolledEmited = new EventEmitter<void>()
  @Output() isLoaded = new EventEmitter<void>()
  @Output() onClickOrder = new EventEmitter()
  @Input() searchForm?: FormGroup
  @Input() searchFormName: string = ""
}
