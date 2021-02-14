import React from 'react';
import EditorBlockEditor from '../Components/Editor/EditorBlockEditor';

function Editor(props) {
  
  return (
    // this is where we set the grid, it will be the first <div> on each "page" - these will all be the same
    <div className="w-screen inline-grid grid-cols-12">
      <h1>Editor Page</h1>
      <EditorBlockEditor />
    </div>
  )
};

export default Editor;