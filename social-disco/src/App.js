import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Name from './components/Name';
import Interests from './components/Interests';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/name" component={Name}/>
          <Route path="/interests" component={Interests}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
