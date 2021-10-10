import React, { useContext } from 'react';
import { get, put } from '../../utils/httputil';
import { ENDPOINT_URL } from '../../constants';
import { Field, Form as FinalForm } from 'react-final-form';
import { Button, Card } from 'react-bootstrap';
import {
  StyledAccountEditFormContainer,
  StyledAccountFieldTitle,
  StyledAccountFormColumn,
  StyledSubmitButtonContainer,
} from '../../styles';
import { ApplicationContext } from '../../context';
import { useHistory } from 'react-router-dom';

const GoalNew = (props) => {
  const { customerId } = useContext(ApplicationContext);
  const history = useHistory();
  return (
    <FinalForm
      onSubmit={(values) => {
        console.log('values in handle submit', values);
        put(ENDPOINT_URL + 'goals', { customerId }, values).then((result) => {
          history.push('/goals');
        });
      }}
      validate={() => {}}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Card.Title>Add new goal</Card.Title>
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

export default GoalNew;
