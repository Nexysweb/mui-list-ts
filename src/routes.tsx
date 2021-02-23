import React from 'react';

import { Router, Switch, Route } from 'react-router-dom';
import * as History from 'history';

import Public from './public';
import Layout from './layout';
import { list } from './list';

const basename: string = import.meta.env.SNOWPACK_PUBLIC_URL || '';

console.log(`basename: ${basename}`);

const history = History.createBrowserHistory({
  basename
});

const Routes = (): JSX.Element => (
  <Router history={history}>
    <Layout>
      <Switch>
        {list.map((l, i) => (
          <Route
            key={i}
            exact
            path={l.path}
            component={(): JSX.Element => <l.Component />}
          />
        ))}
        <Route component={(): JSX.Element => <Public />} />
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
