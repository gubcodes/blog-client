import { React, useState } from 'react';

function LandingSecondaryNavigation(props) {

  return (
    <div>
      <nav className="h-14 w-screen inline-grid grid-cols-12 text-center select-none">
        <div className="col-start-1 col-end-4 sm:col-start-3 sm:col-end-5 mt-auto mb-auto">
          <h3 className={props.currentPage === 'featured' ? 'underline' : 'text-gray-400 cursor-pointer'}
          onClick={() => props.setPage('featured')}>featured</h3>
        </div>
        <div className="col-start-4 sm:col-start-5 col-end-7 mt-auto mb-auto">
          <h3 className={props.currentPage === 'new' ? 'underline' : 'text-gray-400 cursor-pointer'}
          onClick={() => props.setPage('new')}>new</h3>
        </div>
        <div className="col-start-7 col-end-10 sm:col-end-9 mt-auto mb-auto">
          <h3 className={props.currentPage === 'popular' ? 'underline' : 'text-gray-400 cursor-pointer'}
          onClick={() => props.setPage('popular')}>popular</h3>
        </div>
        <div className="col-start-10 col-end-13 sm:col-start-9 sm:col-end-11 mt-auto mb-auto">
          <h3 className={props.currentPage === 'saved' ? 'underline' : 'text-gray-400 cursor-pointer'}
          onClick={() => props.setPage('saved')}>saved</h3>
        </div>
      </nav>
    </div>
  )
};

export default LandingSecondaryNavigation;