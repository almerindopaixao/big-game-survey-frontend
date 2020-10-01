import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Records from '../pages/Records';
import Page404 from '../pages/Page404';

import Header from '../components/Header';

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/records" component={Records} />
      <Route path="*" component={Page404} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
