import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokedexFeatureModule } from './pokedex-feature/pokedex.module';
import { PokemonFeatureModule } from './pokemon-feature/pokemon.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PokedexFeatureModule,
    PokemonFeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
