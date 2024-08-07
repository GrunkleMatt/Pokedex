import { PokedexFacade } from './../../pokedex-data-access/+state/pokedex.facade';
import {
  Component,
  OnDestroy,
  OnInit,
  EventEmitter,
  inject,
} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subscription,
  catchError,
  combineLatest,
  distinctUntilChanged,
  exhaustMap,
  filter,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import {
  PokedexCard,
  PokedexRecord,
} from '../../pokedex-data-access/models/pokedex';
import { PokedexService } from '../../pokedex-data-access/services/pokedex.service';
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
  public pokedexFiltered$: Observable<PokedexRecord | undefined> =
    new Observable<PokedexRecord>();

  public errorCondition = false;

  constructor(
    private pokedexService: PokedexService,
    private scrollPositionService: ScrollPositionService,
    private router: Router
  ) {}

  public pokedexFacade = inject(PokedexFacade);

  ngOnInit(): void {
    combineLatest([
      this.pokedexFacade.pokedexOffset$.pipe(distinctUntilChanged()),
      this.pokedexFacade.pokedexLimit$.pipe(distinctUntilChanged()),
    ]).subscribe(([offset, limit]) => {
      this.pokedexFacade.getPokedex(offset, limit);
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event.url.includes('pokemon'))
          this.scrollPositionService.setScrollPosition(window.scrollY);
      }
    });

    this.searchFormControl.valueChanges
      .pipe(startWith(''))
      .subscribe((searchTermValue) => {
        if (!searchTermValue) {
          this.pokedexFacade.changeVisibility();
          return;
        }
        this.pokedexFacade.filterPokedex(searchTermValue);
      });
    this.pokedexFiltered$ = this.pokedexFacade.pokedexRecord$;
    /*  combineLatest([
      this.pokedexFacade.pokedexOffset$.pipe(take(1)),
      this.pokedexFacade.pokedexLimit$.pipe(take(1)),
    ]).subscribe(([offset, limit]) => {
      this.pokedexFacade.getPokedex(offset, limit);
    });
    this.pokedexFacade.pokedexRecord$.subscribe((pokedexList) => {
      console.log(pokedexList);
    });
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
      this.pokedexFacade.pokedexRecord$,
    ]).pipe(
      exhaustMap(([searchValue, pokedex]) => {
        debugger;
        this.errorCondition = false;
        let pokedexFinal = pokedex ?? {};
        if (!searchValue) {
          this.pokedexFacade.changeVisibility();
          return EMPTY;
        }
        pokedexFinal = this.filterPokemons2(searchValue, pokedexFinal);
        if (Object.values(pokedexFinal).find((item) => !item.isHidden)) {
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
    ); */
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  isPokedexListLoaded() {
    window.scrollTo(0, this.position);
  }

  loadMore(): void {
  this.pokedexFacade.loadMore()
  }

  /* filterPokemons2(searchValue: string, pokedex: PokedexRecord) {
    Object.values(pokedex).forEach((value) => {
      if (!value.name.includes(searchValue)) {
        value.isHidden = true;
      }
    });
    return pokedex;
  } */
}
