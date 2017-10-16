import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

export const Article = ({ item, addLike, likes }) => {
  const getHeader = () => (
    <div>
      <h4>{item.title}</h4>
      <h5>{item.author}</h5>
      <Button onClick={() => addLike(item.url)}>
        <Glyphicon glyph="star" />
          {likes[item.url] && likes[item.url]}
      </Button>
    </div>
  );
  return (
    <Panel header={getHeader()}>
      <img src={item.urlToImage} className="article-img" />
      {item.description}
    </Panel>
  )
};

Article.propTypes = {
  item: React.PropTypes.object,
  likes: React.PropTypes.object,
  addLike: React.PropTypes.func.isRequired,
};

Article.defaultProps = {
  item: {}
};

export default Article;
