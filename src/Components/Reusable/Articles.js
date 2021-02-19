// this component will be used anywhere we need to list articles (landing, profile, admin...)
import { React, useState } from 'react';

function ProfileArticles(props) {
  const [articles, setArticles] = useState([]);

  // we'll set the fetch here for the user's saved articles and set the state above

  return (
    <div>
      {/* .map() over the articles here into ArticlesCard.js */}
    </div>
  )
};

export default ProfileArticles;