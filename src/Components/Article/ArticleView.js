import { React, useState } from 'react';
import ArticleBlockSelector from './ArticleBlockSelector';

function ArticleView(props) {
  // we'll set our states here for all of the article info coming in from the article fetch
  const [upvotes, setUpvotes] = useState(0);
  const [title, setTitle] = useState("Title");
  const [byline, setByline] = useState("Byline");
  const [articleBlocks, setArticleBlocks] = useState ([]);
  // we'll set our states here for all of the author info coming back from the author fetch
  const [authorId, setAuthorId] = useState(0);
  const [authorName, setAuthorName] = useState("Author Name");
  const [authorTitle, setAuthorTitle] = useState("Author Title");

  // we'll put the article fetch here 
  // we'll put the author fetch here and have it fire as soon as the article fetch comes back with with author ID

  return (
    <div>
      <h1>{title}</h1>
      <br/>
      <h3><i>{byline}</i></h3>
      <br/>
      <h4>{authorName}, {authorTitle}</h4>
      <br/>
      {articleBlocks.map((articleBlock) =>
          <ArticleBlockSelector blockType={articleBlock.type} blockContent={blockContent} />
        )}
    </div>
  )
};

export default ArticleView;