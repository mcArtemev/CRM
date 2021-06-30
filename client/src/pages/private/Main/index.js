import React, { useEffect, useState } from 'react';
import { Icon, Image, Divider, Header, Table, Button } from 'semantic-ui-react';
import './style.css';
import { Link } from 'react-router-dom';

const CardExampleCard = () => {
  const [data, setData] = useState({
    createOn: '',
    email: '',
    gender: null,
    name: '',
    surname: '',
    _id: ''
  });
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('user'));
    console.log('localData', localData);
    setData({ ...data, ...localData });
  }, []);
  return (
    <>
      <Divider horizontal>
        <Header as='h4'>
          <Icon name='info' />
          Information
        </Header>
        <Link to='/edit-profile'>
          <Button>Edit profile</Button>
        </Link>
      </Divider>
      <Image src='/photo.jpg' size='small' circular centered />
      <Table definition>
        <Table.Body className="blue">
          <Table.Row>
            <Table.Cell width={2}><Icon name='user' />Name</Table.Cell>
            <Table.Cell>{data.name}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Icon name='user' />Surname</Table.Cell>
            <Table.Cell>{data.surname}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Icon name="envelope"/>Email</Table.Cell>
            <Table.Cell>{data.email}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Icon name="lock"/>Password</Table.Cell>
            <Table.Cell>{data.password}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};


export default CardExampleCard;
