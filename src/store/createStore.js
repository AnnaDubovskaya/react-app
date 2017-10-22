import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import addToStoreFromLocaleStorage from '../utils/addToStoreFromLocaleStorage'
import reducers from '../modules/news';

let middleware = [thunk];

export default function configureStore (initialState) {
  const store = createStore(reducers, initialState, compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  addToStoreFromLocaleStorage(store);
  return store
}
