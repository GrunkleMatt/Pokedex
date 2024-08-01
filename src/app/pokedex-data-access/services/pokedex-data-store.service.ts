import { PokedexRecord } from './../models/pokedex';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokedexDataStoreService {
  private pokedexStore = new BehaviorSubject<PokedexRecord | undefined>(
    undefined
  );

  public offset: number = 0;
  public limit: number = 60;

  constructor() {}

  public setPokedexStore(results: PokedexRecord) {
    this.pokedexStore.next({
      ...this.pokedexStore.value,
      ...results,
    });
  }

  public getPokedexStore() {
    return this.pokedexStore;
  }
}
