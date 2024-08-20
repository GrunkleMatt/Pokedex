import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { GenericService } from '../../utils/services/generic.service';

@Injectable({
  providedIn: 'root',
})

export class PokemonService extends GenericService {

  getPokemon(id?: number | string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.pokedexUrl+`pokemon/${id}`).pipe(catchError(error => {
      console.error('Error caught:', error);
      throw new Error('Error handled using catchError');
  }))

  }
}
