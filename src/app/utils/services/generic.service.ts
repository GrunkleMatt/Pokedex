import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})

export class GenericService {

  public pokedexUrl = 'https://pokeapi.co/api/v2/';

  constructor(public http: HttpClient) {}

}
