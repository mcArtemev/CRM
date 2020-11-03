
import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Checkbox } from 'semantic-ui-react';
import { useFormik } from 'formik';
import sign from '../../api/sign';
import { user } from '../../../../validation'; // настроить Alias
import { friendlyValidationResult } from '../../helpers';

const SignUp = () => {
  const [state, setState] = useState({
    gender: null
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: ''
    },
    validate: (data) => {
      console.log('hello', friendlyValidationResult(user.signIn.validate({
        name: 'Овав',
        surname: 'Ваываы',
        email: 'alu@mail.ru',
        gender: true,
        password: '1234455656'
      }, { abortEarly: false })));
      // console.log(user.signIn.validate(data, { abortEarly: false }));
      return friendlyValidationResult(user.signIn.validate(data, { abortEarly: false }));
    },
    onSubmit: async values => {
      try {
        sign.create(values);
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
          Already Sign Up?<a href='#'> Sign In</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default SignUp;
