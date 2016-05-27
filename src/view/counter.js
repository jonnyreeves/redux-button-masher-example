import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// export the React Component so we can test it independent of redux.
export const Counter = props => {
  const { value, dispatch } = props;
  return (
    <div>
      <p>Counter value: {value}</p>
      <button data-test-name="inc" onClick={() => dispatch({ type: 'INC' })}>++</button>
      <button data-test-name="dec" onClick={() => dispatch({ type: 'DEC' })}>--</button>
    </div>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

// export stateToProps selector so it can be tested.
export const stateToProps = state => state;

// export the connected Counter component for use in the app.
export default connect(stateToProps)(Counter);
