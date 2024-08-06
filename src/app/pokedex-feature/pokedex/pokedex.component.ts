import { Pokemon } from './../../pokedex-data-access/models/pokemon';
import { Component, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subscription,
  combineLatest,
  forkJoin,
  of,
} from 'rxjs';
import { catchError, filter, startWith, switchMap } from 'rxjs/operators';
import {
  PokedexCard,
  PokedexRecord,
} from '../../pokedex-data-access/models/pokedex';
import { PokedexService } from '../../pokedex-data-access/services/pokedex.service';
import { PokedexDataStoreService } from './../../pokedex-data-access/services/pokedex-data-store.service';
import { ScrollPositionService } from '../../utils/services/scroll-position.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit, OnDestroy {
  public results: PokedexRecord = {};
  public pokedex$?: BehaviorSubject<PokedexRecord | undefined>;
  public position = 0;

  public completeLoading: boolean = false;
  private loading: boolean = false;
  private subscription?: Subscription;

  public pokemonOrdered?: PokedexCard[];
  public searchTerm = '';
  public searchFormControlName = 'SearchBar';
  public searchFormControl = new FormControl<string>('');
  public searchFormGroup = new FormGroup({
    [this.searchFormControlName]: this.searchFormControl,
  });
  public pokedexFiltered$: Observable<PokedexRecord> =
    new Observable<PokedexRecord>();

  public errorCondition = false

  constructor(
    private pokedexService: PokedexService,
    private pokedexDataStoreService: PokedexDataStoreService,
    private scrollPositionService: ScrollPositionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pokedex$ = this.pokedexDataStoreService.getPokedexStore();
    if (!this.pokedex$.value) {
      this.loadMore();
    }
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event.url.includes('pokemon'))
          this.scrollPositionService.setScrollPosition(window.scrollY);
      }
    });

    this.subscription = this.scrollPositionService
      .getScrollPosition()
      .subscribe((value) => {
        this.position = value;
      });

    this.pokedexFiltered$ = combineLatest([
      this.searchFormControl.valueChanges.pipe(startWith('')),
      this.pokedex$,
    ]).pipe(
      switchMap(([searchValue, pokedex]) => {
        this.errorCondition = false;
        let pokedexFinal = pokedex ?? {};
        if (!searchValue) {
          Object.values(pokedexFinal).forEach((value) => {
            value.isHidden = false;
          });
          return of(pokedexFinal);
        }
        pokedexFinal = this.filterPokemons2(searchValue, pokedexFinal);
        if (Object.values(pokedexFinal).find((item) =>!item.isHidden)) {
          return of(pokedexFinal);
        }
        return this.pokedexService.getPokemon(searchValue).pipe(
          switchMap((pokemon) => {
            const store = this.pokedex$?.value;
            Object.values(store ?? {}).forEach((value) => {
              value.isHidden = true;
            });
            let storeAdded = store ?? {};
            storeAdded = {
              ...storeAdded,
              [pokemon.name]: {
                name: pokemon.name,
                url: `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`,
                imgUrl: pokemon.sprites.other.home.front_default,
                isHidden: false,
              },
            };
            return of(storeAdded);
          }),
          catchError(() => {
            this.errorCondition = true;
            return EMPTY;
          })
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  isPokedexListLoaded() {
    window.scrollTo(0, this.position);
  }

  loadMore(): void {
    if (this.loading) {
      return;
    }
    this.loading = true;
    this.completeLoading = false;
    this.pokedexService
      .getPokedex(
        this.pokedexDataStoreService.offset,
        this.pokedexDataStoreService.limit
      )
      .pipe(
        filter((data) => !!data),
        switchMap((data) => {
          data.results.forEach((item) => {
            if (!this.results) {
              this.results = {};
            }
            this.results[item.name] = {
              name: item.name,
              url: item.url,
              isHidden: false,
            };
          });
          this.pokedexDataStoreService.offset +=
            this.pokedexDataStoreService.limit;
          this.loading = false;
          return forkJoin(
            Object.values(this.results ?? {}).map((item) => {
              const id = Number(item.url.split('/')[6]);
              return this.pokedexService.getPokemon(id);
            })
          );
        })
      )
      .subscribe((data) => {
        data.forEach((item) => {
          if (!this.results) {
            this.results = {};
          }
          const newPokemon = {
            ...this.results[item.name],
            imgUrl: item.sprites.other.home.front_default,
          };
          this.pokedexDataStoreService.setPokedexStore({
            [item.name]: {
              ...newPokemon,
            },
          });
          this.pokemonOrdered?.push(newPokemon);
        });
        this.completeLoading = true;
      });
  }

  filterPokemons2(searchValue: string, pokedex: PokedexRecord) {
    Object.values(pokedex).forEach((value) => {
      if (!value.name.includes(searchValue)) {
        value.isHidden = true;
      }
    });
    return pokedex;
  }
}
