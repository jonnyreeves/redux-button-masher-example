import { assert } from 'chai';
import reducer from './reducer';

describe('reducer', () => {
  it('should increment the value by one when an action of type INC is reduced', () => {
    const actual = reducer({ value: 5 }, { type: 'INC' });
    assert.equal(actual.value, 6, 'value incremented by one');
  });

  it('should decrement the value by one when an action of type DEC is reduced', () => {
    const actual = reducer({ value: 5 }, { type: 'DEC' });
    assert.equal(actual.value, 4, 'value incremented by one');
  });
});
