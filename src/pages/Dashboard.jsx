import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Alert from 'react-bootstrap/Alert';
import { Card, Button, Image } from 'react-bootstrap';
import { ApplicationContext } from '../context';
import { StyledContainer } from '../styles';

const StyledContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const StyledRowContainer = styled.div`
  margin-top: 30px;
  display: flex;
`;

const Dashboard = () => {
  const { email, password, customerId } = useContext(ApplicationContext);

  const history = useHistory();

  const redirectToUrl = (url) => {
    history.push(url);
  };

  if (!email && !password && !customerId) {
    redirectToUrl('not-logged-in');
  }

  return (
    <StyledContainer>
      <Alert variant="primary">Welcome back! Here are the details for your dashboard!</Alert>
      <StyledContentContainer>
        <StyledRowContainer>
          <Card style={{ width: '400px', marginRight: '30px' }}>
            <Card.Img as={Image} variant="top" width="50px" height="300px" src="personal-data.png" />
            <Card.Body>
              <Card.Title>Personal data</Card.Title>
              <Card.Text>Check your personal data and edit the content.</Card.Text>
              <Button variant="primary" onClick={() => redirectToUrl('/personal-data')}>
                Open
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '400px', marginRight: '30px' }}>
            <Card.Img as={Image} variant="top" width="50px" height="300px" src="chart.png" />
            <Card.Body>
              <Card.Title>Your projection</Card.Title>
              <Card.Text>Check your projections and how your saving is doing. </Card.Text>
              <Button variant="primary" onClick={() => redirectToUrl('/projection')}>
                Open
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '400px' }}>
            <Card.Img as={Image} variant="top" width="50px" height="300px" src="accounts.png" />
            <Card.Body>
              <Card.Title>Accounts</Card.Title>
              <Card.Text>Check your personal accounts and edit their content</Card.Text>
              <Button variant="primary" onClick={() => redirectToUrl('/accounts')}>
                Open
              </Button>
            </Card.Body>
          </Card>
        </StyledRowContainer>
        <StyledRowContainer>
          <Card style={{ width: '400px', marginRight: '30px' }}>
            <Card.Img as={Image} variant="top" width="50px" height="300px" src="goals.png" />
            <Card.Body>
              <Card.Title>Goals</Card.Title>
              <Card.Text>Check your goals and update their content.</Card.Text>
              <Button variant="primary" onClick={() => redirectToUrl('/goals')}>
                Open
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '400px', marginRight: '30px' }}>
            <Card.Img as={Image} variant="top" width="50px" height="300px" src="cashflows.png" />
            <Card.Body>
              <Card.Title>Your cash flows</Card.Title>
              <Card.Text>Check your cash flows and update their content.</Card.Text>
              <Button variant="primary" onClick={() => redirectToUrl('/cashflows')}>
                Open
              </Button>
            </Card.Body>
          </Card>
        </StyledRowContainer>
      </StyledContentContainer>
    </StyledContainer>
  );
};

export default Dashboard;
