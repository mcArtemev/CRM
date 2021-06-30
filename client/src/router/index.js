import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // as для изменения названия файла
import PublicRouter from './public';
import PrivateRouter from './private';

import store from 'store';

export default () => {
  console.log('routerconsole', store.isAuth);
  return (
    <Router>
      <Switch>
        <Route path="/">
          <PublicRouter/>
          {store.isAuth ? <PrivateRouter/> : null}
        </Route>
      </Switch>
    </Router>
  );
};
