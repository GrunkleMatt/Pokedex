import { Component, Input, OnInit } from '@angular/core';
import { PokedexService } from '../../pokedex-data-access/services/pokedex.service';
import { Pokemon } from '../../pokedex-data-access/models/pokemon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})

export class PokemonComponent implements OnInit {
  public pokemonResult?: Pokemon;
  constructor(
    private pokedexService: PokedexService,
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokedexService.getPokemon(id).subscribe((data) => {
      this.pokemonResult = data
    })
  }

  buttonClicked(a: string)
  {
    alert(a)
  }
}
