import React from 'react';
import EditorBlockParagraph from './EditorBlockParagraph';
import EditorBlockList from './EditorBlockList';
import EditorBlockCodePen from './EditorBlockCodePen';

function EditorBlockSelector(props) {
    if (props.blockType === "paragraph") {
      return <EditorBlockParagraph 
      blockContent={props.blockContent} 
      setBlockContent={props.setBlockContent}/>
    } else if (props.blockType === "list") {
      return <EditorBlockList 
      blockContent={props.blockContent} 
      setBlockContent={props.setBlockContent}/>
    } else if (props.blockType === "codepen") {
      return <EditorBlockCodePen 
      blockContent={props.blockContent} 
      setBlockContent={props.setBlockContent}/>
    } 
};

export default EditorBlockSelector;