import { Pipe, PipeTransform } from '@angular/core';
import { PokedexCard } from '../../pokedex-data-access/models/pokedex';

@Pipe({
  name: 'fromRecordToArray'
})
export class FromRecordToArrayPipe implements PipeTransform {
  transform(value: Record<string, PokedexCard>): PokedexCard[] {
    const values =  Object.values(value)
    if(!value || values.length === 0) {
      return [];
    }

    return Object.values(value);
  }
}
