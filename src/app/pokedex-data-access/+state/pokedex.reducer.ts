import { createReducer, on } from '@ngrx/store';
import { PokedexRecord } from '../models/pokedex';
import { PokedexActions } from './pokedex.actions';

export interface PokedexRecordState {
  pokedexRecord?: PokedexRecord
}

export const initialState: PokedexRecordState = {}

export const pokedexReducer = createReducer (
  initialState,
  on(PokedexActions.setPokedex, (state, { pokedexRecord }) => ({ ...state, pokedexRecord }))
)
