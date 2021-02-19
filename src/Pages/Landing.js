import { React, useState } from 'react';
import LandingSecondaryNavigation from '../Components/Landing/LandingSecondaryNavigation';

function Landing(props) {
  const [currentPage, setCurrentPage] = useState('featured');

  function setPage(value) {
    setCurrentPage(value);
    // we also need to trigger the appropriate articles fetch here
  }

  return (
    <div>
      <LandingSecondaryNavigation 
      currentPage={currentPage} 
      setPage={setPage} 
      />
    </div>
  )
};

export default Landing;