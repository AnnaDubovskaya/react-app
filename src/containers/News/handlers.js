import { compose, withHandlers, lifecycle } from 'recompose'

export default compose(
  lifecycle({
    componentDidMount () {
      this.props.getAllPublisher();
    }
  }),
  withHandlers({
    selectPublisher: props => item => {
      const { selectPublisher } = props;
      selectPublisher(item);
    },
    onSearch: props => e => {
      const { setSearchData } = props;
      setSearchData(e.target.value);
    }
  })
)