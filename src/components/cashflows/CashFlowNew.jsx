import React, { useContext } from 'react';
import { ApplicationContext } from '../../context';
import { useHistory } from 'react-router-dom';
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

const CashFlowNew = () => {
  const { customerId } = useContext(ApplicationContext);
  const history = useHistory();
  return (
    <FinalForm
      onSubmit={(values) => {
        console.log('values in handle submit', values);
        put(ENDPOINT_URL + 'cashflows', { customerId }, values).then((result) => {
          history.push('/cashflows');
        });
      }}
      validate={() => {}}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Card.Title>Add new cash flow</Card.Title>
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
                <StyledAccountFieldTitle>Date from</StyledAccountFieldTitle>
                <Field name="dateFrom" component="input" type="date" placeholder="Planned for" />
              </div>
              <div>
                <StyledAccountFieldTitle>Date to</StyledAccountFieldTitle>
                <Field name="dateTo" component="input" type="date" placeholder="Planned for" />
              </div>
            </StyledAccountFormColumn>
            <StyledAccountFormColumn>
              <div>
                <StyledAccountFieldTitle>Type</StyledAccountFieldTitle>
                <Field name="type" component="input" placeholder="Type" />
              </div>
              <div>
                <StyledAccountFieldTitle>Occurence type</StyledAccountFieldTitle>
                <Field name="occurenceType" component="input" placeholder="occurenceType" />
              </div>
            </StyledAccountFormColumn>
          </StyledAccountEditFormContainer>
          <StyledSubmitButtonContainer>
            <Button type="submit">Submit</Button>
            <Button variant="secondary" style={{ marginLeft: '10px' }} onClick={() => history.push('/cashflows')}>
              Cancel
            </Button>
          </StyledSubmitButtonContainer>
        </form>
      )}
    />
  );
};
export default CashFlowNew;
