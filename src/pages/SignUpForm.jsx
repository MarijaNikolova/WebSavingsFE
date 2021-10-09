import React from 'react';
import { Field, Form as FinalForm } from 'react-final-form';
import { Button, Card } from 'react-bootstrap';
import { StyledFieldHolder, StyledFormContainer, StyledSubmitButtonContainer } from '../styles';
import { get, put } from '../utils/httputil';
import { ENDPOINT_URL } from '../constants';
import { useHistory } from 'react-router-dom';

const SignUpForm = () => {
  const history = useHistory();
  return (
    <FinalForm
      onSubmit={(values) => {
        console.log(values);
        put(ENDPOINT_URL + 'customer', {}, values).then((result) => {
          console.log("you're signed up");
          alert("You're signed up. Redirecting you to login page");
          history.push('/?signUp=true');
        });
      }}
      validate={() => {}}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Card style={{ width: '500px' }}>
            <Card.Body>
              <StyledFormContainer>
                <h2>Sign up!</h2>
                <StyledFieldHolder>
                  <div>Name</div>
                  <Field name="name" component="input" placeholder="Name" />
                </StyledFieldHolder>
                <StyledFieldHolder>
                  <div>Surname</div>
                  <Field name="surname" component="input" placeholder="Surname" />
                </StyledFieldHolder>
                <StyledFieldHolder>
                  <div>Date of birth</div>
                  <Field name="dateOfBirth" component="input" placeholder="Date of birth" type="date" />
                </StyledFieldHolder>
                <StyledFieldHolder>
                  <div>Email address</div>
                  <Field name="email" component="input" placeholder="Email" type="email" />
                </StyledFieldHolder>
                <StyledFieldHolder>
                  <div>Password</div>
                  <Field name="password" component="input" placeholder="Password" type="password" />
                </StyledFieldHolder>
                <StyledSubmitButtonContainer>
                  <Button type="submit">Submit</Button>
                </StyledSubmitButtonContainer>
              </StyledFormContainer>
            </Card.Body>
          </Card>
        </form>
      )}
    />
  );
};

export default SignUpForm;
