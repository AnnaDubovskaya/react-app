import { fromJS } from 'immutable';
import { setLikesFromLocalStorage, setNumberOfVisitors, setReadersFromLocalStorage } from '../modules/news';
import { getToday } from './dateUtils';

export default store => {
  addLikes(store);
  addReaders(store);
  addNumberOfVisitors(store);
};

const addLikes = store => {
  if (localStorage.likes) {
    store.dispatch(setLikesFromLocalStorage(fromJS(JSON.parse(localStorage.likes))))
  }
};

const addReaders = store => {
  if (localStorage.readers) {
    store.dispatch(setReadersFromLocalStorage(fromJS(JSON.parse(localStorage.readers))))
  }
};

const addNumberOfVisitors = store => {
  const today = getToday();
  let numberOfVisitors = {};
  let numberOfVisitorsByDate = 1;
  if (localStorage.numberOfVisitors) {
    numberOfVisitors = JSON.parse(localStorage.numberOfVisitors);
    numberOfVisitorsByDate = numberOfVisitors[today] ? numberOfVisitors[today] + 1 : 1;
    numberOfVisitors[today] = numberOfVisitorsByDate;
  }
  else {
    numberOfVisitors[today] = 1;
  }
  localStorage.setItem('numberOfVisitors', JSON.stringify(numberOfVisitors));
  store.dispatch(setNumberOfVisitors(numberOfVisitorsByDate));
};
