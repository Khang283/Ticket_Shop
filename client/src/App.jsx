import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage.jsx';
import About from './About.tsx';
import Contact from './Contact.tsx';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;