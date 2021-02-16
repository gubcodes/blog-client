import React from 'react';

function ArticleBlockList(props) {
  // props.blockContent was passed in

  // we'll map() over the incoming array (the list will be saved to the server as an array of list items) to create <li>s
  // i am not 100% i built this map() method correctly, we'll see when we test it

  return (
    <ul>
      {props.blockContent.map((listItem) =>
      {
          return <li>{listItem}</li>;
        })}
    </ul>
  )
};

export default ArticleBlockList;