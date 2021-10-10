import React, { useContext } from 'react';
import { ApplicationContext } from '../../context';
import { Field, Form as FinalForm } from 'react-final-form';
import { put } from '../../utils/httputil';
import { ENDPOINT_URL } from '../../constants';
import { Button, Card } from 'react-bootstrap';
import {
  StyledAccountEditFormContainer,
  StyledAccountFieldTitle,
  StyledAccountFormColumn,
  StyledSubmitButtonContainer,
} from '../../styles';
import { useHistory } from 'react-router-dom';

const GoalEdit = (props) => {
  const { goal, handleEditModeChange, handleRefetch } = props;
  const { customerId } = useContext(ApplicationContext);
  console.log(goal);
  const history = useHistory();
  return (
    <FinalForm
      onSubmit={(values) => {
        console.log(values);
        console.log('editing goal with id', goal.id);
        put(ENDPOINT_URL + 'goals', { customerId }, { id: goal.id, ...values })
          .then((result) => {
            handleEditModeChange(false);
            handleRefetch(true);
          })
          .then(() => {});
      }}
      initialValues={goal}
      validate={() => {}}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Card.Title>Update goal</Card.Title>
          <StyledAccountEditFormContainer>
            <StyledAccountFormColumn>
              <div>
                <StyledAccountFieldTitle>Description</StyledAccountFieldTitle>
                <Field name="description" component="input" placeholder="Description" />
              </div>
              <div>
                <StyledAccountFieldTitle>Value</StyledAccountFieldTitle>
                <Field name="value" component="input" placeholder="Value" />
              </div>
              <div>
                <StyledAccountFieldTitle>Currency</StyledAccountFieldTitle>
                <Field name="currency" component="input" placeholder="Currency" />
              </div>
              <div>
                <StyledAccountFieldTitle>Planned for</StyledAccountFieldTitle>
                <Field name="plannedFor" component="input" type="date" placeholder="Planned for" />
              </div>

              <div>
                <StyledAccountFieldTitle>Type</StyledAccountFieldTitle>
                <Field name="type" component="input" placeholder="Type" />
              </div>
            </StyledAccountFormColumn>
          </StyledAccountEditFormContainer>
          <StyledSubmitButtonContainer>
            <Button type="submit">Submit</Button>
            <Button variant="secondary" style={{ marginLeft: '10px' }} onClick={() => history.push('/goals')}>
              Cancel
            </Button>
          </StyledSubmitButtonContainer>
        </form>
      )}
    />
  );
};

export default GoalEdit;
