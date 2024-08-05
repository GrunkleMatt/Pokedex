import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokedexFeatureModule } from './pokedex-feature/pokedex.module';
import { PokemonFeatureModule } from './pokemon-feature/pokemon.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokedexNotFoundComponent } from './pokedex-not-found/pokedex-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PokedexFeatureModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
