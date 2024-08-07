import { createReducer, on } from '@ngrx/store';
import { PokedexRecord } from '../models/pokedex';
import { PokedexActions } from './pokedex.actions';
import { state } from '@angular/animations';
import { EMPTY } from 'rxjs';

export interface PokedexRecordState {
  offset: number;
  limit: number;
  pokedexRecord?: PokedexRecord;
}

export const initialState: PokedexRecordState = {
  offset: 0,
  limit: 60,
};

export const pokedexReducer = createReducer(
  initialState,
  on(PokedexActions.setPokedex, (state, { pokedexRecord }) => ({
    ...state,
    offset: state.offset + state.limit,
    pokedexRecord,
  })),
  on(PokedexActions.setPokedexVisibility, (state) => {
    let pokedexCopy: PokedexRecord = {};
    if (state.pokedexRecord) {
      Object.entries(state.pokedexRecord).forEach(([k, v]) => {
        pokedexCopy[k] = {
          ...v,
          isHidden: false,
        };
      });
    }
    return {
      ...state,
      pokedexRecord: pokedexCopy,
    };
  }),
  on(PokedexActions.filterPokedex, (state, { searchTerm }) => {
    let pokedexCopy: PokedexRecord = {};
    if (state.pokedexRecord) {
      debugger
      Object.entries(state.pokedexRecord).forEach(([k, v]) => {
          pokedexCopy[k] = {
            ...v,
            isHidden: !v.name.includes(searchTerm)
          };
      });
    }
    return {
      ...state,
      pokedexRecord: pokedexCopy,
    };
  })
);
