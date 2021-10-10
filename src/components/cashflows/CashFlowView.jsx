import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CashFlowView = (props) => {
  const { cashflow, handleEditModeChange } = props;

  return (
    <div>
      <Card.Title>{cashflow?.description}</Card.Title>
      <img alt="bank" height="100px" width="100px" src="goal.png" />
      <Card.Body>
        <div>Value: {`${cashflow?.value} ${cashflow?.currency}`}</div>
        {cashflow?.dateFrom && <div>From: {cashflow?.dateFrom}</div>}
        {cashflow?.dateTo && <div>To: {cashflow?.dateTo}</div>}
        <div>Type: {cashflow?.type}</div>
        <div>Occurrence: {cashflow?.occurenceType}</div>
      </Card.Body>
      <Card.Footer>
        <Button variant="dark" onClick={() => handleEditModeChange(true)}>
          Edit
        </Button>
      </Card.Footer>
    </div>
  );
};
export default CashFlowView;
