import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import LoginForm from './LoginForm';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 20px;
`;

const StyledSignUp = styled.span`
  color: blue;
  text-decoration: underline;
`;

const Home = () => {
  let history = useHistory();
  const onSignUpClick = () => {
    history.push('/sign-up');
  };
  return (
    <StyledContainer>
      <Row>
        <Col>
          {' '}
          <Alert variant="primary">Welcome to the web savings calculator! Please login / sign up to continue !</Alert>
        </Col>
      </Row>
      <Row>
        <Col />
        <Col>
          <LoginForm />
        </Col>
        <Col />
      </Row>
      <Row>
        <p>
          If you don't have an account, <StyledSignUp onClick={() => onSignUpClick()}>Sign up </StyledSignUp> to
          continue.{' '}
        </p>
      </Row>
    </StyledContainer>
  );
};

export default Home;
