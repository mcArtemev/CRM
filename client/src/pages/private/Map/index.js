import React, { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import './style.css';

import { YMaps, Map } from 'react-yandex-maps';


const CardExampleCard = () => {
  const [activeItem, setActiveItem] = useState('');
  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <div className="map-container">
      <>
        <Segment>
          <Menu pointing secondary>
            <Menu.Item
              active={activeItem === 'Geolocation'}
              onClick={handleItemClick}
              name='Geolocation'>
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item
                name='Marks'
                active={activeItem === 'Marks'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name='Lines'
                active={activeItem === 'Lines'}
                onClick={handleItemClick}
              />

              <Menu.Item
                name='Polygon'
                active={activeItem === 'Polygon'}
                onClick={handleItemClick}
              />

              <Menu.Item
                name='Heat map'
                active={activeItem === 'Heat map'}
                onClick={handleItemClick}
              />
            </Menu.Menu>
          </Menu>
        </Segment>
        <YMaps >
          <Map state={{ center: [55.75, 37.57], zoom: 10 }} className="map"/>
        </YMaps>
      </>
    </div>
  );
};


export default CardExampleCard;
