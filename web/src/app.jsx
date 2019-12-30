import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';

import theme from './theme';
import history from './history';

import Home from './components/Home';

export default function () {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
