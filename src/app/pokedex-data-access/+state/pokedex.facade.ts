import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokedexActions } from './pokedex.actions';
import { selectPokedexRecord, selectPokedexOffset, selectPokedexLimit } from './pokedex.selectors';

@Injectable({
  providedIn: 'root',
})
export class PokedexFacade {
  private store = inject(Store)
  getPokedex(offset: number, limit: number) {
    this.store.dispatch(PokedexActions.getPokedex({offset, limit}))
  }

  public pokedexRecord$ = this.store.select(selectPokedexRecord)
  public pokedexOffset$ = this.store.select(selectPokedexOffset)
  public pokedexLimit$ = this.store.select(selectPokedexLimit)

  changeVisibility () {
    this.store.dispatch(PokedexActions.setPokedexVisibility())
  }

  filterPokedex (searchTerm: string) {
    this.store.dispatch(PokedexActions.filterPokedex({searchTerm}))
  }

  loadMore () {
    this.store.dispatch(PokedexActions.triggerLoading())
  }
}
