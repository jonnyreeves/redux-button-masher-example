import 'react-addons-test-utils';
import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import { Counter, stateToProps } from './counter';

describe('view/counter.js', () => {
  describe('stateToProps', () => {
    it('should pass thru the state unaltered', () => {
      const state = { foo: 'bar' };
      const props = stateToProps(state);
      assert.deepEqual(state, props);
    });
  });
  describe('Counter', () => {
    let dispatched;
    const dispatchSpy = action => { dispatched = action; };

    const wrapper = shallow(<Counter dispatch={dispatchSpy} value="1" />);
    const decButton = wrapper.find('[data-test-name="dec"]');
    decButton.simulate('click');

    assert.deepEqual(dispatched, { type: 'lemon' });
  });
});
