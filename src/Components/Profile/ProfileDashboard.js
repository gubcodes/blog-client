import { React, useState } from 'react';

function ProfileDashboard(props) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [upvotes, setUpvotes] = useState(0);
  const [articles, setArticles] = useState([]); // maybe just to get a "total articles written" thing - articles.length

  // call a fetch here to get human info to set the states above

  // call a fetch here to get article and comment (stretch) data and set states above

  return (
    <div>
      {/* welcome message */}
      {/* author data */}
      {/* comment notifications (stretch) */}
      {/* data visualization (stretch) */}
    </div>
  )
};

export default ProfileDashboard;