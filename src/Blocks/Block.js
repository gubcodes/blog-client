import React from 'react';
import BlockParagraph from './BlockParagraph';
import BlockList from './BlockList';
import BlockCodePen from './BlockCodePen';

function Block(props) {
    if (props.blockType === "paragraph") {
      return <BlockParagraph 
      blockContent={props.blockContent} 
      setBlockContent={props.setBlockContent}/>
    } else if (props.blockType === "list") {
      return <BlockList 
      blockContent={props.blockContent} 
      setBlockContent={props.setBlockContent}/>
    } else if (props.blockType === "codepen") {
      return <BlockCodePen 
      blockContent={props.blockContent} 
      setBlockContent={props.setBlockContent}/>
    } 
};

export default Block;