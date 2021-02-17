import React from 'react';
import ArticleBlockParagraph from './ArticleBlockParagraph';
import ArticleBlockList from './ArticleBlockList';
import ArticleBlockCodePen from './ArticleBlockCodePen';
import ArticleBlockImage from './ArticleBlockImage';
import ArticleBlockCodeSnippet from './ArticleBlockCodeSnippet';


function ArticleBlockSelector(props) {
    if (props.blockType === "paragraph") {
      return <ArticleBlockParagraph 
      blockContent={props.blockContent} />
    } else if (props.blockType === "list") {
      return <ArticleBlockList 
      blockContent={props.blockContent} />
    } else if (props.blockType === "codepen") {
      return <ArticleBlockCodePen 
      blockContent={props.blockContent} />
    } else if (props.blockType === "image") {
      return <ArticleBlockImage 
      blockContent={props.blockContent} />
    } else if (props.blockType === "codesnippet") {
      return <ArticleBlockCodeSnippet 
      blockContent={props.blockContent} />
    }
};

export default ArticleBlockSelector;