import React from 'react';

function BlockParagraph(props) {
  //need to pass in blockType, blockContent, setBlockContent function
  return <label
    htmlFor="paragraph block"
    className="block">
    <textarea
      type="text"
      className="form-textarea mt-1 block w-full"
      rows="3"
      {
      ...(props.blockContent === ""
        ?
        { placeholder: "This is a paragraph" }
        :
        { value: props.blockContent })
      }
      onChange={(e) => props.setBlockContent(e.target.value)}>
    </textarea>
  </label>
};

export default BlockParagraph;