import { PokedexRecord } from './../models/pokedex';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokedexService } from '../services/pokedex.service';
import { PokedexActions } from './pokedex.actions';
import { exhaustMap, filter, forkJoin, map, switchMap } from 'rxjs';
import { PokemonService } from '../../pokemon-data-acces/service/pokemon.service';

let results: PokedexRecord = {};

export const loadPokedex = createEffect(
  (actions$ = inject(Actions), pokedexService = inject(PokedexService), pokemonService = inject(PokemonService)) => {
    return actions$.pipe(
      ofType(PokedexActions.getPokedex),
      exhaustMap(({ offset, limit }) => {
        return pokedexService.getPokedex(offset, limit).pipe(
          filter((data) => !!data),
          switchMap((data) => {
            data.results.forEach((item) => {
              results[item.name] = {
                name: item.name,
                url: item.url,
                isHidden: false
              };
            });
            return forkJoin(
              Object.values(results ?? {}).map((item) => {
                const id = Number(item.url.split('/')[6]);
                return pokemonService.getPokemon(id);
              })
            );
          }),
          map((data) => {
            let pokedexRecord: PokedexRecord = {}
            data.forEach((item) => {
              if (!results) {
                results = {};
              }
              const newPokemon = {
                ...results[item.name],
                imgUrl: item.sprites.other.home.front_default,
              };
              pokedexRecord[item.name]= {
                  ...newPokemon,
                }
            });
            return PokedexActions.setPokedex({ pokedexRecord });
          })
        );
      })
    );
  },
  { functional: true }
);
