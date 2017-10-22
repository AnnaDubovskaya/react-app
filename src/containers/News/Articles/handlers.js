import { compose, withHandlers } from 'recompose'

export default compose(
  withHandlers({
    addLike: props => item => {
      const { addLike, likes } = props;
      const count = likes[item] ? likes[item] + 1 : 1;
      addLike(item, count);
      addToLocalStorage(item, count, 'likes');
    },
    addReader: props => item => {
      const { readers, addReader } = props;
      const count = readers[item] ? readers[item] + 1 : 1;
      addReader(item, count);
      addToLocalStorage(item, count, 'readers');
    }
  })
)

const addToLocalStorage = (item, count, name) => {
  if (!localStorage[name]) {
    localStorage.setItem(name, JSON.stringify({}));
  }
  const data = JSON.parse(localStorage[name]);
  data[item] = count;
  localStorage.setItem(name, JSON.stringify(data));
};
