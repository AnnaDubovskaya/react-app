import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import LikeButton from '../../components/LikeButton'

export const Article = ({ item, addLike, likes, readers, addReader }) => {
  const getHeader = () => (
    <div>
      <h4>{item.title}</h4>
      <h5>{item.author}</h5>
      <LikeButton
        addLike={() => addLike(item.url)}
        count={likes[item.url]}
      />
    </div>
  );
  return (
    <Panel header={getHeader()}>
      <img src={item.urlToImage} className="article-img" />
      {item.description}
      <br />
      <a href={item.url} onClick={() => addReader(item.url)} target="_blank">Read</a>
      <br />
      <span className="readers">
        Count number of reads per article: {readers[item.url] ? readers[item.url] : 0}
      </span>
    </Panel>
  )
};

Article.propTypes = {
  item: React.PropTypes.object,
  likes: React.PropTypes.object,
  readers: React.PropTypes.object,
  addLike: React.PropTypes.func.isRequired,
  addReader: React.PropTypes.func.isRequired,
};

Article.defaultProps = {
  item: {}
};

export default Article;
