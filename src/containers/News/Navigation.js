import React from 'react';
import MenuItem from 'react-bootstrap/lib/MenuItem';

const Navigation = ({ publishers, selectPublisher }) => (
  <ul>
    {publishers.map((item) =>
      <MenuItem key={item} onClick={() => selectPublisher(item)}>{item}</MenuItem>)
    }
  </ul>
);

Navigation.propTypes = {
  publishers: React.PropTypes.array.isRequired,
  selectPublisher: React.PropTypes.func.isRequired,
};

Navigation.defaultProps = {
  publishers: []
};

export default Navigation;
