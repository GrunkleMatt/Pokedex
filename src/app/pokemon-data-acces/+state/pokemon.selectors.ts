import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Pokemon } from "../models/pokemon";


export const selectedPokemonState = createFeatureSelector<Readonly<Pokemon>>('pokemon')

export const selectPokemon = createSelector(
  selectedPokemonState,
  (state) => {
    return state
  }
)
