import actionTypes from '../actions/actionTypes';
// Reducer input State, Action and return a new State
// Reducer function must be pure
// forbidden in Reducer:
// mutate arguments
// perform side effects (e.g. api call and routing transitions)
// call non-pure functions
// state = [] : default argument syntax
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.CREATE_COURSE:
      // debugger;
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
