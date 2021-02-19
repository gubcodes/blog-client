import { React, useState } from 'react';
import ArticleBlockSelector from './ArticleBlockSelector';
import AuthorInfo from '../Reusable/AuthorInfo';

function ArticleView(props) {
  // we'll set our states here for all of the article info coming in from the article fetch
  const [upvotes, setUpvotes] = useState(0);
  const [title, setTitle] = useState("Title");
  const [byline, setByline] = useState("Byline");
  const [articleBlocks, setArticleBlocks] = useState ([]); // might have to force trigger this to re-render after fetch, not sure
  const [authorId, setAuthorId] = useState(0);

  // we'll put the article fetch here

  return (
    <div>
      <h1>{title}</h1>
      <br/>
      <h3><i>{byline}</i></h3>
      <br/>
      {articleBlocks.map((articleBlock) =>
          <ArticleBlockSelector blockType={articleBlock.type} blockContent={blockContent} />
        )}
      <br/>
      <AuthorInfo authorId={authorId} />
    </div>
  )
};

export default ArticleView;