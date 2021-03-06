
import React, { useState } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Checkbox } from 'semantic-ui-react';
import { useFormik } from 'formik';
import userApi from '../../api/user';
import { user } from '../../../../validation'; // настроить Alias
import { friendlyValidationResult } from '../../helpers';
import { useHistory, Link } from 'react-router-dom';

const SignUp = () => {
  console.log('signup');
  const [state, setState] = useState({
    gender: null
  });
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: ''
    },
    validate: (data) => {
      return friendlyValidationResult(user.signUp.validate(data, { abortEarly: false }));
    },
    onSubmit: async values => {
      try {
        console.log('onsubmit');
        await userApi.create(values);
        history.push('/sign-in');
      } catch (error) {
        console.log(error);
      }
    }
  });
  const handleChange = (e, { value }) => setState({ ...state, gender: value });
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Sign Up
        </Header>
        <Form size='large' onSubmit={formik.handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.errors.name &&
                {
                  content: formik.errors.name,
                  pointing: 'below'
                }}
            />
            <Form.Input
              fluid
              name="surname"
              placeholder="Surname"
              onChange={formik.handleChange}
              value={formik.values.surname}
              error={formik.errors.surname &&
                {
                  content: formik.errors.surname,
                  pointing: 'below'
                }}
            />
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
              error={formik.errors.password &&
                {
                  content: formik.errors.password,
                  pointing: 'below'
                }}
            />
            <Form.Input
              fluid
              name="passwordConfirmation"
              placeholder="Repeat password"
              onChange={formik.handleChange}
              value={formik.values.passwordConfirmation}
              error={formik.errors.passwordConfirmation &&
                {
                  content: formik.errors.passwordConfirmation,
                  pointing: 'below'
                }}
            />
            {console.log(formik.errors)}
            <Form.Field>
              <Checkbox
                radio
                label='Male'
                name='gender'
                value={true}
                checked={formik.values.gender === true}
                onChange={(e, { value }) => formik.setFieldValue('gender', value)}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                radio
                label='Female'
                name='gender'
                value={false}
                checked={formik.values.gender === false}
                onChange={(e, { value }) => formik.setFieldValue('gender', value)}
              />
            </Form.Field>


            <Button color='teal' fluid size='large' type='submit'>
              Confirm
            </Button>
          </Segment>
        </Form>
        <Message>
          Already Sign Up?<Link to="/sign-in"> Sign In</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default SignUp;
