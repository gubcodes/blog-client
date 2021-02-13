import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div>
      <Router>
      <Navigation />
      </Router>
      {/* add footer here */}
    </div>
  );
}

export default App;