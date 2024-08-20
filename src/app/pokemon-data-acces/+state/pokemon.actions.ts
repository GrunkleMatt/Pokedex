import { createActionGroup, props } from "@ngrx/store";
import { Pokemon } from "../models/pokemon";


export const PokemonActions = createActionGroup ({
  source: 'Pokemon',
  events: {
    'Get Pokemon': props<{ id: number | string }>(),
    'Set Pokemon': props<{ pokemon: Pokemon}>()
  },
});
