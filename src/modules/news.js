import { fromJS } from 'immutable';
import { schema, normalize } from 'normalizr';
import { json, status } from '../utils/responseHandlers';

// constants

const GET = 'GET';
const REQUEST_HEADERS = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
};
const SET_PUBLISHERS = 'SET_PUBLISHERS';
const SET_ARTICLES = 'SET_ARTICLES';
const SELECT_PUBLISHER = 'SELECT_PUBLISHER';
const SET_SEARCH_DATA = 'SET_SEARCH_DATA';
const SET_LIKES_FROM_LOCAL_STORAGE = 'SET_LIKED_FROM_LOCAL_STORAGE';
const ADD_LIKE = 'ADD_LIKED';
const URLS = [
  'https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=7198dc6293f54680a7a1b9b11c3bcada',
  'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=7198dc6293f54680a7a1b9b11c3bcada',
  'https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=7198dc6293f54680a7a1b9b11c3bcada',
  'https://newsapi.org/v1/articles?source=time&sortBy=top&apiKey=7198dc6293f54680a7a1b9b11c3bcada',
  'https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=7198dc6293f54680a7a1b9b11c3bcada'
];

// schemas

const articles = new schema.Entity('articles', {}, { idAttribute: 'url' });
const publishers = new schema.Entity('publishers', {
  articles: [articles]
}, { idAttribute: 'source' });
const publishersSchema = [publishers];

// actions

export const setPublisher = (entities, ids) => {
  return { type: SET_PUBLISHERS, entities, ids }
};

export const selectPublisher = item => {
  return { type: SELECT_PUBLISHER, item }
};

export const setArticles = articles => {
  return { type: SET_ARTICLES, articles }
};

export const setSearchData = searchData => {
  return { type: SET_SEARCH_DATA, searchData };
};

export const setLikesFromLocalStorage = liked => {
  return { type: SET_LIKES_FROM_LOCAL_STORAGE, liked };
};

export const addLike = (article, count) => {
  return { type: ADD_LIKE, article, count };
};

// reducers

const defaultState = fromJS({
  publishers: { searchData: '', likes: {} }
});

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case SET_PUBLISHERS: return state
      .setIn(['publishers', 'ids'], action.ids)
      .setIn(['publishers', 'entities'], action.entities);
    case SELECT_PUBLISHER: {
      return state.setIn(['publishers','selectedPublisher'], action.item);
        }
    case SET_ARTICLES: return state.setIn(['publishers', 'articles'], action.articles);
    case SET_SEARCH_DATA: return state.setIn(['publishers', 'searchData'], action.searchData);
    case SET_LIKES_FROM_LOCAL_STORAGE: return state.setIn(['publishers', 'likes'], action.liked);
    case ADD_LIKE: return state.setIn(['publishers', 'likes', [action.article]], action.count);
    default: return state;
  }
}

// request to api

export const getAllPublisher = () => {
  return dispatch => {
    Promise.all([
      dispatch(getPublisher(URLS[0])),
      dispatch(getPublisher(URLS[1])),
      dispatch(getPublisher(URLS[2])),
      dispatch(getPublisher(URLS[3])),
      dispatch(getPublisher(URLS[4])),
    ]).then(data => {
      const normalized = normalize(data, publishersSchema);
      dispatch(setPublisher(fromJS(normalized.entities.publishers), normalized.result));
      dispatch(setArticles(fromJS(normalized.entities.articles)));
    })
  }
};

const getPublisher = url => {
  return dispatch => {
    return fetch(url, {
      method: GET,
      headers: REQUEST_HEADERS,
    })
      .then(status)
      .then(json)
      .then(data => data)
      .catch(error => Promise.reject(error))
  }
};
