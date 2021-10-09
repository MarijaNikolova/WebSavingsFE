import './App.css';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 20px;
`;

function App() {
  return (
    <div className="App">
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
      </StyledContainer>
    </div>
  );
}

export default App;
