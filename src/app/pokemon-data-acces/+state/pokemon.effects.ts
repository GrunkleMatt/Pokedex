import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Pokemon } from '../models/pokemon';
import { inject } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { PokemonActions } from './pokemon.actions';
import { exhaustMap, map } from 'rxjs';

export const loadPokemon = createEffect(
  (actions$ = inject(Actions), pokemonService = inject(PokemonService)) => {
    return actions$.pipe(
      ofType(PokemonActions.getPokemon),
      exhaustMap(({ id }) => {
        return pokemonService.getPokemon(id).pipe(
          map((data) => {
            return PokemonActions.setPokemon( { pokemon: data });
          })
        );
      })
    );
  },
  { functional: true }
);

