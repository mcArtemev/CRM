import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Menu, Icon } from 'semantic-ui-react';
import store from 'store';
import sign from '../../api/sign';

console.log('import', sign.signOut);
export default () => {
  const [activeItem, setActiveItem] = useState('');
  const history = useHistory();
  const handleItemClick = (e, { name }) => setActiveItem(name);
  const onClickBurger = () => {
    store.setSideBarVisibility();
  };
  const logoutHandler = async () => {
    localStorage.clear();
    await sign.signOut();
    history.push('/sign-in');
  };
  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          onClick={onClickBurger}
        >
          <Icon disabled name='bars' />
        </Menu.Item>
        {/* Logo position center */}
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={logoutHandler}
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
};
