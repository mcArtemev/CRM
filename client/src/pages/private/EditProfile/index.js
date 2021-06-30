
import React, { useEffect, useState } from 'react';
import { Button, Form, Grid, Header, Image, Segment, Checkbox } from 'semantic-ui-react';
import { useFormik } from 'formik';
import { user as userValidation } from 'validation'; // настроить Alias
import user from 'api/user';
import { friendlyValidationResult } from 'helpers';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const [state, setState] = useState({
  });
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: undefined
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate: (data) => {
      console.log(friendlyValidationResult(userValidation.editProfile.validate(data, { abortEarly: false })));
      return friendlyValidationResult(userValidation.editProfile.validate(data, { abortEarly: false }));
    },
    onSubmit: async values => {
      try {
        console.log(values, user.edit);
        await user.edit({ ...values, ...state });
        const editedUser = await user.whoAmI();
        localStorage.setItem('user', JSON.stringify(editedUser.data));
        history.push('/page');
      } catch (error) {
        console.log(error);
      }
    }
  });

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('user'));
    formik.setValues({ name: localData.name, surname: localData.surname, email: localData.email, password: undefined, passwordConfirmation: undefined });
  }, []);

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Edit Profile
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
            <Button color='teal' fluid size='large' type='submit'>
              Confirm
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default SignUp;
