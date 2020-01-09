// root reducer

import { combineReducers } from 'redux';
// default export can be named anything
import courseReducer from './courseReducer';

const rootReducer = combineReducers({
  courses: courseReducer
});

export default rootReducer;
