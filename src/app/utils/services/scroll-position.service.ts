import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollPositionService {

  private positions = new BehaviorSubject<number>(0)

  constructor() { }

  public setScrollPosition(position: number) {
    this.positions.next(position)
  }

  public getScrollPosition() {
    return this.positions;
  }
}
