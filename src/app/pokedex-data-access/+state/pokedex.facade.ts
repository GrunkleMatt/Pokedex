import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokedexActions } from './pokedex.actions';
import { selectPokedexRecord } from './pokedex.selectors';

@Injectable({
  providedIn: 'root',
})
export class PokedexFacade {
  private store = inject(Store)
  getPokedex(offset: number, limit: number) {
    this.store.dispatch(PokedexActions.getPokedex({offset, limit}))
  }
  public pokedexRecord$ = this.store.select(selectPokedexRecord)
}
