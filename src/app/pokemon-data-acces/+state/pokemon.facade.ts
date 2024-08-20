import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { PokemonActions } from "./pokemon.actions";
import { selectPokemon } from "./pokemon.selectors";

@Injectable({
  providedIn: 'root',
})

export class PokemonFacade {
  private store = inject(Store);
  getPokemon(id: number) {
    this.store.dispatch(PokemonActions.getPokemon({id}))
  }

  public pokemon$ = this.store.select(selectPokemon);
}
