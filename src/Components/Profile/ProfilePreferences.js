import { React, useState } from 'react';

function ProfilePreferences(props) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [theme, setTheme] = useState('');

  // we'll call the fetch here for the user's info and set the states above

  //this entire page should probably be double password protected...

  return (
    <div>
      {/* put in form with states above as placeholders/values to change their info */}
    </div>
  )
};

export default ProfilePreferences;