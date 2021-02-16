import React from 'react';

function ArticleBlockCodeSnippet(props) {
  // props.blockContent was passed in

  // we'll need to include the language when saving code snippet in the editor: [{language: ""}, {code: ""}]

  return (
    <div>
      <pre>
        <code className={blockContent.language}>
          {blockContent.code}
        </code>
      </pre>
    </div>
  )
};

export default ArticleBlockCodeSnippet;