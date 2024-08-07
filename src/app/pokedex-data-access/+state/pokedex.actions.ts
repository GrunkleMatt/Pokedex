
import { createActionGroup, props } from '@ngrx/store';
import { PokedexRecord } from '../models/pokedex';

export const PokedexActions = createActionGroup({
  source: 'PokedexRecord',
  events: {
    'Get Pokedex': props<{ offset: number; limit: number }>(),
    'Set Pokedex': props<{ pokedexRecord: PokedexRecord }>(),
  },
});
