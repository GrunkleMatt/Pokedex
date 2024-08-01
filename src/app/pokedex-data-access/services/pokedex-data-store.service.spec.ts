import { TestBed } from '@angular/core/testing';

import { PokedexDataStoreService } from './pokedex-data-store.service';

describe('PokedexDataStoreService', () => {
  let service: PokedexDataStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokedexDataStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
