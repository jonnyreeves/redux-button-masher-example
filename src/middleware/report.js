/* eslint no-unused-vars: [2, {"argsIgnorePattern": "^store$" }] */

export default function newReportMiddleware({ count = 5, callback = alert }) {
  let timesPressed = 0;

  return store => next => action => {
    // Filter actions.
    if (action.type !== 'INC') {
      return next(action);
    }

    // Business logic
    timesPressed += 1;
    if ((timesPressed % count) === 0) {
      callback(`${action.type} dispatched ${count} times`);
    }

    // Ensure action gets reduced.
    return next(action);
  };
}
