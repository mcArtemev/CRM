import React from 'react';
import { Switch, useParams, Route } from 'react-router-dom'; // as для изменения названия файла
import { Divider } from 'semantic-ui-react';
import Main from '../pages/private/Main';
import EditProfile from '../pages/private/EditProfile';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import Map from '../pages/private/Map';

const Test = () => {
  const { _id } = useParams();
  return (
    <div>{_id}</div>
  );
};

export default () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/page" component={Main} />
        <Route exact path="/edit-profile" component={EditProfile} />
        <Route exact path="/map" component={Map} />
      </Switch>
      <Sidebar/>
    </>
  );
};
