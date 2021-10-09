import './App.css';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Col />
        <Row>
          <Col>
            {' '}
            <Alert variant="primary">Welcome to the web savings calculator! Please login / sign up to continue !</Alert>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
}

export default App;
