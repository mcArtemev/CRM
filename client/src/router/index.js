import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // as для изменения названия файла
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/hello" component={ () => <h1>Hello</h1>} />
        <Route exact path="/" component={ () => <h1>Goodbye</h1>} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-in" component={SignIn} />
      </Switch>
      {/* это jsx коммент. И все чтот выше jsx. path="/" всегда должен быть в конце */}
    </Router>
  );
};
