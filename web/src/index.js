import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import store from './state';
import history from './state/history';

import Home from './containers/Home';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'));
/* eslint-enable react/jsx-filename-extension */

registerServiceWorker();
