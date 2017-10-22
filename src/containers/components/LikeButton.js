import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

const LikeButton = ({ addLike, count }) => (
  <Button onClick={addLike}>
    <Glyphicon glyph="star" />{count}</Button>
);

LikeButton.propTypes = {
  count: React.PropTypes.number,
  addLike: React.PropTypes.func.isRequired,
};

LikeButton.defaultProps = {
  count: 0
};

export default LikeButton;