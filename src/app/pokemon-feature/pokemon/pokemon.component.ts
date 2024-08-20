import { PokemonService } from './../../pokemon-data-acces/service/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../pokemon-data-acces/models/pokemon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})

export class PokemonComponent implements OnInit {

  public pokemonResult?: Pokemon;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getPokemon(id).subscribe((data) => {
      this.pokemonResult = data
    })
  }

}
