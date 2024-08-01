import { FromRecordToArrayPipe } from './from-record-to-array.pipe';

describe('FromRecordToArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new FromRecordToArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
