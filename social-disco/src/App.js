import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Name from './components/Name';
import Interests from './components/Interests';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Video from './components/Video';
import Matches from './components/Matches';
import Swipe from './components/Swipe';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/name" component={Name}/>
          <Route path="/interests" component={Interests}/>
          <Route path="/video" component={Video}/>
          <Route path="/matches" component={Matches}/>
          <Route path="/swipe" component={Swipe}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
