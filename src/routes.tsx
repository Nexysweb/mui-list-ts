import React from 'react';

import { Router, Switch, Route } from 'react-router-dom';
import * as History from 'history';

import Public from './public';

const Layout = ({ children }: { children: any }) => <>{children}</>;

const basename: string = import.meta.env.SNOWPACK_PUBLIC_URL || '';

console.log(`basename: ${basename}`);

const history = History.createBrowserHistory({
  basename
});

const Routes = (): JSX.Element => (
  <Router history={history}>
    <Layout>
      <Switch>
        <Route component={(): JSX.Element => <Public />} />
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
