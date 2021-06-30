import React from 'react';
import { Switch, Route } from 'react-router-dom'; // as для изменения названия файла
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

export default () => {
  return (

    <Switch>
      <Route exact path="/hello" component={ () => <h1>Hello</h1>} />
      <Route exact path="/" component={ () => <h1>Goodbye</h1>} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/sign-in" component={SignIn} />
    </Switch>

  );
};
