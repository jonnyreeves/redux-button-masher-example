import testUtils from 'react-addons-test-utils';
import sinon from 'sinon';
import React from 'react';
import { assert } from 'chai';
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
    let renderer;
    let dispatch;

    beforeEach(() => {
      dispatch = sinon.spy();
      renderer = testUtils.createRenderer();
      renderer.render(<Counter dispatch={dispatch} value={1} />);
    });

    // note: enzyme is a better fit for most projects.
    function simulateClick(testName) {
      const output = renderer.getRenderOutput();
      let target;
      for (let i = 0; i < output.props.children.length; i++) {
        const child = output.props.children[i];
        if (child.props['data-test-name'] === testName) {
          target = child;
        }
      }
      if (target) {
        target.props.onClick();
      }
    }

    it('should dispatch an INC action when the increment button is clicked', () => {
      simulateClick('inc');
      assert.ok(dispatch.withArgs({ type: 'INC' }).calledOnce);
    });

    it('should dispatch an DEC action when the decrement button is clicked', () => {
      simulateClick('dec');
      assert.ok(dispatch.withArgs({ type: 'DEC' }).calledOnce);
    });
  });
});
