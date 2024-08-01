import { PokedexResult } from '../../pokedex-data-access/models/pokedex';
import { PokedexService } from '../../pokedex-data-access/services/pokedex.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss',
})

export class PokedexComponent implements OnInit {
  public results: PokedexResult[] = [];
  private offset: number = 0;
  private limit: number = 20;
  private loading: boolean = false;

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore(): void {
    if (this.loading) {
      return;
    }
    this.loading = true;
    this.pokedexService.getPokedex(this.offset, this.limit).subscribe((data) => {
      this.results = [...this.results, ...data.results];
      this.offset += this.limit;
      this.loading = false;
    });
  }
}
