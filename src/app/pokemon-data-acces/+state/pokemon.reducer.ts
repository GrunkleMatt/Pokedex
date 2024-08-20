import { createReducer, on } from "@ngrx/store";
import { PokemonActions } from "./pokemon.actions";
import { Pokemon } from "../models/pokemon";


export const initialState: Partial<Pokemon>  = {}

export const pokemonReducer = createReducer(
  initialState,
  on(PokemonActions.setPokemon, (state, {pokemon}) => ({
    ...pokemon
  }))
)
