import React from 'react';
import { Button, Card } from 'react-bootstrap';

const AccountView = (props) => {
  const { account, handleEditModeChange } = props;

  return (
    <div>
      <Card.Title>{`${account.description} @ ${account.bank.name}`}</Card.Title>
      <img alt="bank" height="100px" width="100px" src="bank.png" />
      <Card.Body>
        <div>Value: {`${account.initialValue} ${account.currency}`}</div>
        {account.growthRate && <div>Growth rate: {account.growthRate}%</div>}
        {account.riskFactor && <div>Risk factor: {account.riskFactor}%</div>}
        <div>Type: {account.type}</div>
      </Card.Body>
      <Card.Footer>
        <Button variant="dark" onClick={() => handleEditModeChange(true)}>
          Edit
        </Button>
      </Card.Footer>
    </div>
  );
};
export default AccountView;
