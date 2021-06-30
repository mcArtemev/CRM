
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment, Checkbox } from 'semantic-ui-react';
import { useFormik } from 'formik';
import sign from 'api/sign';
import { user } from '../../../../validation'; // настроить Alias
import { friendlyValidationResult } from '../../helpers';
import store from 'store';


const SignIn = () => {
  const [state, setState] = useState({
    gender: null
  });
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: (data) => {
      return friendlyValidationResult(user.signIn.validate(data, { abortEarly: false }));
    },
    onSubmit: async values => {
      try {
        console.log(values);
        const { data } = await sign.signIn(values);
        store.setAuth(true);
        store.setUser(data);
        window.location = '/page';
      } catch (error) {
        console.log(error);
      }
    }
  });
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Sign In
        </Header>
        <Form size='large' onSubmit={formik.handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email &&
                {
                  content: formik.errors.email,
                  pointing: 'below'
                }}
            />
            <Form.Input
              fluid
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.errors.password && {
                content: formik.errors.password,
                pointing: 'below'
              }}
            />

            <Button color='teal' fluid size='large' type='submit'>
              Confirm
            </Button>
          </Segment>
        </Form>
        <Message>
          Haven`t an account?<Link to="/sign-up"> Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default SignIn;
