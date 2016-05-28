import { assert } from 'chai';
import sinon from 'sinon';
import newReportMiddleware from './report';

describe('middleware/report.js', () => {
  it('should pass the action to next', () => {
    const nextArgs = [];
    const next = (...args) => {
      nextArgs.push(args);
    };

    const action = { type: 'INC' };
    const middleware = newReportMiddleware({});
    middleware({})(next)(action);

    assert.equal(nextArgs.length, 1, 'next called once');
    assert.deepEqual(nextArgs[0], [action], 'action passed to next');
  });

  it('should pass the action to next (sinon)', () => {
    const next = sinon.spy();
    const action = { type: 'INC' };
    const middleware = newReportMiddleware({});
    middleware({})(next)(action);

    assert.ok(next.withArgs(action).calledOnce, 'action passed to next, once');
  });

  it('should invoke the callback after the supplied count of INC actions ' +
     'is reached', () => {
    const next = () => undefined;
    const callback = sinon.spy();
    const middleware = newReportMiddleware({ callback, count: 3 });

    middleware({})(next)({ type: 'INC' });
    middleware({})(next)({ type: 'INC' });
    middleware({})(next)({ type: 'DEC' });
    assert.ok(callback.notCalled,
      'callback not invoked until 3 INC actions have been intercepted');

    middleware({})(next)({ type: 'INC' });
    assert.ok(callback.calledOnce,
      'callback invoked once 3 INC actions have been intercepted');
  });
});
