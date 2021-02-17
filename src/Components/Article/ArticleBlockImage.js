import React from 'react';

function ArticleBlockImage(props) {
  // props.blockContent was passed in
  return (
    <div>
      <img src={props.blockContent} />
    </div>
  )
};

export default ArticleBlockImage;