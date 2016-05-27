import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import newReportMiddleware from './middleware/report';
import reducer from './reducer';
import Counter from './view/counter';

const store = createStore(
  reducer,
  applyMiddleware(
    newReportMiddleware({})
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>, document.getElementById('root'));
