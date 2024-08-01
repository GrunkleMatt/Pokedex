import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokedex-search',
  templateUrl: './pokedex-search.component.html',
  styleUrl: './pokedex-search.component.scss',
})
export class PokedexSearchComponent{
  @Input() searchForm?: FormGroup
  @Input() searchFormName: string = ""
}
