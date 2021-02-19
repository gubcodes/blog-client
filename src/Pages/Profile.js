import { React, useState } from 'react';
import ProfileSecondaryNavigation from '../Components/Profile/ProfileSecondaryNavigation';

function Profile(props) {
  const [currentPage, setCurrentPage] = useState('dashboard');

  function setPage(value) {
    setCurrentPage(value);
    // we also need to trigger the appropriate articles fetch here
  }

  return (
    <div>
      <ProfileSecondaryNavigation 
      currentPage={currentPage}
      setPage={setPage} 
      />
    </div>
  )
};

export default Profile;