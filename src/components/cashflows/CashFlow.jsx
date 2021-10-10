import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import CashFlowView from './CashFlowView';
import CashFlowEdit from './CashFlowEdit';

const CashFlow = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { cashflow, handleRefetch } = props;

  console.log('cashflow in CashFlow', cashflow);
  return (
    <Card style={{ width: '500px', marginRight: '10px', marginBottom: '10px' }}>
      <Card.Body>
        {!isEditMode ? (
          <CashFlowView cashflow={cashflow} handleEditModeChange={setIsEditMode} />
        ) : (
          <CashFlowEdit handleRefetch={handleRefetch} cashflow={cashflow} handleEditModeChange={setIsEditMode} />
        )}{' '}
      </Card.Body>
    </Card>
  );
};
export default CashFlow;
