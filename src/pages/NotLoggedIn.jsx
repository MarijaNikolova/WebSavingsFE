import React from 'react';
import { Alert } from 'react-bootstrap';

const NotLoggedIn = () => {
  return (
    <div>
      <Alert variant="danger">Please login to enter the page.</Alert>
    </div>
  );
};

export default NotLoggedIn;
