
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { PokedexRecord } from '../models/pokedex';

export const PokedexActions = createActionGroup({
  source: 'PokedexRecord',
  events: {
    'Get Pokedex': props<{ offset: number; limit: number }>(),
    'Set Pokedex': props<{ pokedexRecord: PokedexRecord }>(),
    'Set Pokedex Visibility': emptyProps(),
    'Filter Pokedex': props<{ searchTerm: string}>(),
    'Trigger loading': emptyProps()
  },
});
