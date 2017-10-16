import { connect } from 'react-redux';
import { compose } from 'recompose';
import handlers from './handlers';
import News from './News';
import { getAllPublisher, selectPublisher, setSearchData } from '../../modules/news';

const mapStateToProps = state => ({
  publishers: state.get('publishers').toJS(),
});

const mapDispatchToProps = {
  getAllPublisher, selectPublisher, setSearchData
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  handlers
)(News)
