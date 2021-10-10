import React from 'react';
import { Button, Card } from 'react-bootstrap';

const GoalView = (props) => {
  const { goal, handleEditModeChange } = props;

  return (
    <div>
      <Card.Title>{goal.description}</Card.Title>
      <img alt="bank" height="100px" width="100px" src="goal.png" />
      <Card.Body>
        <div>Value: {`${goal.value} ${goal.currency}`}</div>
        {goal.plannedFor && <div>Planned for: {goal.plannedFor}</div>}
        <div>Type: {goal.type}</div>
      </Card.Body>
      <Card.Footer>
        <Button variant="dark" onClick={() => handleEditModeChange(true)}>
          Edit
        </Button>
      </Card.Footer>
    </div>
  );
};

export default GoalView;
