import { Pipe, PipeTransform } from '@angular/core';
import {
  PokedexCard,
  PokedexRecord,
} from '../../pokedex-data-access/models/pokedex';

@Pipe({
  name: 'orderListAlphabetically',
})

export class OrderListAlphabeticallyPipe implements PipeTransform {
  transform(value: Record<string, PokedexCard>): PokedexCard[] {
    if (!value || Object.keys(value).length === 0) {
      return [];
    }
    return Object.values(value).sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
}
