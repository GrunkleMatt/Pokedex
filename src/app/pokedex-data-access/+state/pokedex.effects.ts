import { PokedexList } from './../models/pokedex';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokedexService } from '../services/pokedex.service';
import { PokedexActions } from './pokedex.actions';
import { exhaustMap, map } from 'rxjs';

export const loadPokedex = createEffect(
  (actions$ = inject(Actions), pokedexService = inject(PokedexService)) => {
    return actions$.pipe(
      ofType(PokedexActions.getPokedex),
      exhaustMap(({ offset, limit }) => {
        return pokedexService.getPokedex(offset, limit).pipe(
          map((pokedexRecord) => {
             return PokedexActions.setPokedex({ pokedexRecord });
          })
        );
      })
    );
  },
  { functional: true }
);
