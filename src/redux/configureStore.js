import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
// default export can be named anything
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  // add support for Redux dev tools
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // this middleware is a safety net whick warning you if you mutate the state
  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
