import { connect } from 'react-redux';
import { compose } from 'recompose';
import { createSelector } from 'reselect'
import handlers from './handlers';
import Articles from './Articles';
import { setLikesFromLocalStorage, addLike } from '../../../modules/news'

const getArticles = createSelector([
  state => state.get('publishers').toJS()],
  (publishers) => {
    const { selectedPublisher, entities, searchData, articles } = publishers;
    const selectedArticles = entities[selectedPublisher].articles;
    return selectedArticles.filter(item =>
      articles[item].description.toLowerCase().indexOf(searchData.toLowerCase()) !== -1
    );
  }
);

const mapStateToProps = state => ({
  ids: getArticles(state),
  entities: state.getIn(['publishers', 'articles']).toJS(),
  likes: state.getIn(['publishers', 'likes']).toJS()
});

const mapDispatchToProps = { setLikesFromLocalStorage, addLike };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  handlers
)(Articles)

