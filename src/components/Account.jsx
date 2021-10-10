import React, { useState } from 'react';
import AccountView from './AccountView';
import AccountEdit from './AccountEdit';
import { Card } from 'react-bootstrap';

const Account = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { account, handleRefetch } = props;
  console.log('account', account);

  return (
    <Card style={{ width: '500px', marginRight: '10px', marginBottom: '10px' }}>
      <Card.Body>
        {!isEditMode ? (
          <AccountView account={account} handleEditModeChange={setIsEditMode} />
        ) : (
          <AccountEdit handleRefetch={handleRefetch} account={account} handleEditModeChange={setIsEditMode} />
        )}{' '}
      </Card.Body>
    </Card>
  );
};

export default Account;
