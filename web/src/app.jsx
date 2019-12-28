import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import history from './history';

import Home from './components/Home';

export default function () {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
      </Switch>
    </Router>
  );
}
