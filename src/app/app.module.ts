import { pokedexReducer } from './pokedex-data-access/+state/pokedex.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokedexFeatureModule } from './pokedex-feature/pokedex.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokedexNotFoundComponent } from './pokedex-not-found/pokedex-not-found.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as pokedexEffects from './pokedex-data-access/+state/pokedex.effects';
import * as pokemonEffects from './pokemon-data-acces/+state/pokemon.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { pokemonReducer } from './pokemon-data-acces/+state/pokemon.reducer';


@NgModule({
  declarations: [
    AppComponent,
    PokedexNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot({ pokedex: pokedexReducer, pokemon: pokemonReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    }),
    EffectsModule.forRoot([pokedexEffects, pokemonEffects]),
    PokedexFeatureModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
