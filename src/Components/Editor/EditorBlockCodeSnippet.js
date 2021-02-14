import React from 'react';

function EditorBlockCodeSnippet(props) {
  //need to pass in blockType, blockContent, setBlockContent function
  return <label
    htmlFor="code snippet block"
    className="block">
    <textarea
      type="url"
      className="form-textarea mt-1 block w-full"
      rows="1"
      pattern="https://.*"
      {
      ...(props.blockContent === ""
        ?
        { placeholder: "Insert Code Snippet here" }
        :
        { value: props.blockContent })
      }
      onChange={(e) => props.setBlockContent(e.target.value)}>
    </textarea>
  </label>
};

export default EditorBlockCodeSnippet;