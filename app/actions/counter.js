/* @flow */
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment(): Action {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement(): Action {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd(): Function {
  return (dispatch: Function, getState: Function) => {
    const { counter } = getState();

    if (counter % 2 !== 0) {
      dispatch(increment());
    }
  };
}

export function incrementAsync(delay: number = 1000): Function {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
