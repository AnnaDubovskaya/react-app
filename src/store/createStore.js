import { createStore, applyMiddleware, compose } from 'redux'
import { fromJS } from 'immutable';
import thunk from 'redux-thunk'
import reducers, { setLikesFromLocalStorage } from '../modules/news';

let middleware = [thunk];

export default function configureStore (initialState) {
  const store = createStore(reducers, initialState, compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  addToStoreFromLocaleStorage(store);
  return store
}

const addToStoreFromLocaleStorage = store => {
  if (localStorage.likes) {
    store.dispatch(setLikesFromLocalStorage(fromJS(JSON.parse(localStorage.likes))))
  }
};
