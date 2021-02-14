import React from 'react';

function EditorBlockImage(props) {
  //need to pass in blockType, blockContent, setBlockContent function
  return <label
    htmlFor="image block"
    className="block">
    <textarea
      type="text"
      className="form-textarea mt-1 block w-full"
      rows="1"
      {
      ...(props.blockContent === ""
        ?
        { placeholder: "This will be image upload" }
        :
        { value: props.blockContent })
      }
      onChange={(e) => props.setBlockContent(e.target.value)}>
    </textarea>
  </label>
};

export default EditorBlockImage;