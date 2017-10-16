import { compose, withHandlers } from 'recompose'

export default compose(
  withHandlers({
    addLike: props => item => {
      const { addLike, likes } = props;
      const count = likes[item] ? likes[item] + 1 : 1;
      console.log('count', likes[item], count);
      addLike(item, count);
      addLikeToLocalStorage(item, count);
    },
  })
)

const addLikeToLocalStorage = (item, count) => {
  if (!localStorage.likes) {
    localStorage.setItem('likes', JSON.stringify({}));
  }
  const likes = JSON.parse(localStorage.likes);
  likes[item] = count;
  localStorage.setItem('likes', JSON.stringify(likes));
};
