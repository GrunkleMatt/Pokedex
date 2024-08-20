import { PokemonFacade } from './../../pokemon-data-acces/+state/pokemon.facade';
import { PokemonService } from './../../pokemon-data-acces/service/pokemon.service';
import { Component, inject, OnInit } from '@angular/core';
import { Pokemon } from '../../pokemon-data-acces/models/pokemon';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})

export class PokemonComponent implements OnInit {

  private pokemonFacade = inject(PokemonFacade)
  public pokemonResult$?: Observable<Pokemon>;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonFacade.getPokemon(id)
    this.pokemonResult$ = this.pokemonFacade.pokemon$
  }

}
