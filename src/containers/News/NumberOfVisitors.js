import React from 'react';

const NumberOfVisitors = ({ count }) => <div>Number of visitors today: {count}</div>;

NumberOfVisitors.propTypes = {
  count: React.PropTypes.number.isRequired,
};

NumberOfVisitors.defaultProps = {
  count: 0,
};

export default NumberOfVisitors;
