import React from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import store from 'store';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import './style.css';

const SidebarMain = observer(({ store }) => {
  return (
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      onHide={() => store.setSideBarVisibility()}
      vertical
      visible={ store.sidebarIsVisible }
    >
      <Menu.Item>
        <Link to="/page">
          <Icon name='address card' />
          Profile
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link to="/map">
          <Icon name='map' />
          Map
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/message">
          <Icon name='chat' />
          Message
        </Link>
      </Menu.Item>
    </Sidebar>
  );
});

export default () => <SidebarMain store={ store }/>;
