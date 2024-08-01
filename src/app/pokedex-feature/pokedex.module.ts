import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokedexUiModule } from '../pokedex-ui/pokedex-ui.module';

const routes: Routes = [
  { path: '', component: PokedexComponent }
];

@NgModule({
  declarations: [PokedexComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PokedexUiModule
  ]
})
export class PokedexFeatureModule { }
