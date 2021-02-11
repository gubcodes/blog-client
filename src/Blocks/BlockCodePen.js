import React from 'react';

function BlockCodePen(props) {
  //need to pass in blockType, blockContent, setBlockContent function
  return <label
    htmlFor="codepen block"
    className="block">
    <textarea
      type="url"
      className="form-textarea mt-1 block w-full"
      rows="1"
      pattern="https://.*"
      {
      ...(props.blockContent === ""
        ?
        { placeholder: "Insert CodePen URL here" }
        :
        { value: props.blockContent })
      }
      onChange={(e) => props.setBlockContent(e.target.value)}>
    </textarea>
  </label>
};

export default BlockCodePen;