// this component will be used anywhere Articles.js is used (landing, profile, admin...)
import React from 'react';

function LandingArticlesCard(props) {
  

  return (
    <div>
      <h2>{props.article.title}</h2>
      <br/>
      <h4>{props.article.byline}</h4>
    </div>
    // need to add upvotes & save button
  )
};

export default LandingArticlesCard;