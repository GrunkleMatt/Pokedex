import { OrderListAlphabeticallyPipe } from './utils/pipes/order-list-alphabetically.pipe';

describe('OrderListAlphabeticallyPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListAlphabeticallyPipe();
    expect(pipe).toBeTruthy();
  });
});
