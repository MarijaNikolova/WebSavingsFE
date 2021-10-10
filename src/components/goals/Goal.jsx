import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import GoalView from './GoalView';
import GoalEdit from './GoalEdit';

const Goal = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { goal, handleRefetch } = props;

  return (
    <Card style={{ width: '500px', marginRight: '10px', marginBottom: '10px' }}>
      <Card.Body>
        {!isEditMode ? (
          <GoalView goal={goal} handleEditModeChange={setIsEditMode} />
        ) : (
          <GoalEdit handleRefetch={handleRefetch} goal={goal} handleEditModeChange={setIsEditMode} />
        )}{' '}
      </Card.Body>
    </Card>
  );
};

export default Goal;
