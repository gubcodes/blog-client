import React from 'react';

function ArticleBlockParagraph(props) {
  // props.blockContent was passed in
  return (
    <div>
      <p>{props.blockContent}</p>
    </div>
  )
};

export default ArticleBlockParagraph;