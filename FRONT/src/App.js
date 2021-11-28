import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';

import SignUp from './components/pages/SignUp';
import Libro1 from './components/pages/Libro1'
import Libro2 from './components/pages/Libro2'
import Libro3 from './components/pages/Libro3'
import Deseos from './components/pages/Deseos';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/deseos' component={Deseos} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/libro1' component={Libro1} />
          <Route path='/libro2' component={Libro2} />
          <Route path='/libro3' component={Libro3} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
