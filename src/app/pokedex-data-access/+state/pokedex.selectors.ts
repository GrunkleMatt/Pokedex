import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PokedexRecordState } from "./pokedex.reducer";

export const selectPokedexRecordState = createFeatureSelector<Readonly<PokedexRecordState>>('pokedex');

export const selectPokedexRecord = createSelector(
  selectPokedexRecordState,
  (state) => {
    return state.pokedexRecord;
  }
);
