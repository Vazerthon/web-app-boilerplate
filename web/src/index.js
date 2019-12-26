import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import history from './history';

import Home from './components/Home';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/" exact render={() => <Home />} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
/* eslint-enable react/jsx-filename-extension */

registerServiceWorker();
