import React from 'react';
import Article from './Article';

export const Articles = ({ ids, entities, addLike, likes }) => {
  return (
    <div>
      {ids.map(item =>
        <Article key={item} item={entities[item]} addLike={addLike} likes={likes} />
      )}
    </div>
  )
};

Articles.propTypes = {
  ids: React.PropTypes.array,
  entities: React.PropTypes.object,
  addLike: React.PropTypes.func.isRequired,
  likes: React.PropTypes.object,
};

Articles.defaultProps = {
  ids: [],
  entities: {},
  likes: {},
};

export default Articles;
