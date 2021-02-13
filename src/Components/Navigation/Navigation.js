import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Article from '../../Pages/Article';
import Editor from '../../Pages/Editor';
import Landing from '../../Pages/Landing';
import Profile from '../../Pages/Article';

function Navigation(props) {

  return (
    <div>
      <nav className="h-14 w-screen inline-grid grid-cols-12 text-center border-solid border-gray-200 border-2">
        <div className="col-start-1 col-end-5 mt-auto mb-auto">
          <a href="/"><h2>brand</h2></a>
        </div>
        <div className="col-start-9 col-end-11 mt-auto mb-auto">
          <a href="/profile"><h4>profile</h4></a>
        </div>
        <div className="col-start-11 col-end-13 mt-auto mb-auto">
          <a href="/editor"><h2>+</h2></a>
        </div>
      </nav>
      {/* page routing below - not visible */}
      <Switch>
        <Route exact path="/">
          <Landing 
          title="landing"
          // pass props here
          />
        </Route>
        <Route exact path="/article/:id">
          <Article 
          title="article"
          // pass props here
          />
        </Route>
        <Route exact path="/editor">
          <Editor 
          title="editor"
          // pass props here
          />
        </Route>
        <Route exact path="/profile">
          <Profile 
          title="profile"
          // pass props here
          />
        </Route>
      </Switch>
    </div>
  )
};

export default Navigation;