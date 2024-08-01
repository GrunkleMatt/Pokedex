import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokedexUiModule } from '../pokedex-ui/pokedex-ui.module';
import { FromRecordToArrayPipe } from '../utils/pipes/from-record-to-array.pipe';
import { OrderListAlphabeticallyPipe } from '../utils/pipes/order-list-alphabetically.pipe';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: PokedexComponent }
];

@NgModule({
  declarations: [
    PokedexComponent,
    FromRecordToArrayPipe,
    OrderListAlphabeticallyPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PokedexUiModule,
    ReactiveFormsModule
  ]
})
export class PokedexFeatureModule { }
