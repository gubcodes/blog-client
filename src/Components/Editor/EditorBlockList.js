import React from 'react';

function EditorBlockList(props) {
  //need to pass in blockType, blockContent, setBlock#Content function
  return <label
    htmlFor="list block"
    className="block">
    <textarea
      type="text"
      className="form-textarea mt-1 block w-full"
      rows="4"
      {
      ...(props.blockContent === ""
        ?
        { placeholder: "This \nis \na \nlist" }
        :
        { value: props.blockContent })
      }
      onChange={(e) => props.setBlockContent(e.target.value)}>
    </textarea>
  </label>
};

export default EditorBlockList;