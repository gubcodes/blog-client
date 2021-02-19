import { React, useState } from 'react';

function ProfileSecondaryNavigation(props) {

  return (
    <div>
      <nav className="h-14 w-screen inline-grid grid-cols-12 text-center select-none">
        <div className="col-start-1 col-end-5 sm:col-start-4 sm:col-end-6 mt-auto mb-auto">
          <h3 className={props.currentPage === 'dashboard' ? 'underline' : 'text-gray-400 cursor-pointer'}
          onClick={() => props.setPage('dashboard')}>dashboard</h3>
        </div>
        <div className="col-start-5 col-end-9 sm:col-start-6 sm:col-end-8 mt-auto mb-auto">
          <h3 className={props.currentPage === 'my work' ? 'underline' : 'text-gray-400 cursor-pointer'}
          onClick={() => props.setPage('my work')}>my work</h3>
        </div>
        <div className="col-start-9 col-end-13 sm:col-start-8 sm:col-end-10 mt-auto mb-auto">
          <h3 className={props.currentPage === 'preferences' ? 'underline' : 'text-gray-400 cursor-pointer'}
          onClick={() => props.setPage('preferences')}>preferences</h3>
        </div>
      </nav>
    </div>
  )
};

export default ProfileSecondaryNavigation;