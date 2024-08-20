import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokedexList } from '../models/pokedex';
import { GenericService } from '../../utils/services/generic.service';

@Injectable({
  providedIn: 'root',
})

export class PokedexService extends GenericService {
  getPokedex(offset: number = 0, limit: number): Observable<PokedexList> {
    return this.http.get<PokedexList>(this.pokedexUrl + 'pokemon', {
      params: {
        offset: offset.toString(),
        limit: limit.toString(),
      },
    });
  }
}
