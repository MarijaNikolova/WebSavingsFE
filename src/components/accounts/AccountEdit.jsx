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

const AccountEdit = (props) => {
  const { account, handleEditModeChange, handleRefetch } = props;
  const { customerId } = useContext(ApplicationContext);
  console.log(account);
  return (
    <FinalForm
      onSubmit={(values) => {
        console.log(values);
        put(ENDPOINT_URL + 'accounts', { customerId }, { id: account.id, ...values })
          .then((result) => {
            handleEditModeChange(false);
            handleRefetch(true);
          })
          .then(() => {});
      }}
      initialValues={account}
      validate={() => {}}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Card.Title>Edit account</Card.Title>
          <StyledAccountEditFormContainer>
            <StyledAccountFormColumn>
              <div>
                <StyledAccountFieldTitle>Description</StyledAccountFieldTitle>
                <Field name="description" component="input" placeholder="Description" />
              </div>
              <div>
                <StyledAccountFieldTitle>Value</StyledAccountFieldTitle>
                <Field name="initialValue" component="input" placeholder="Value" />
              </div>
              <div>
                <StyledAccountFieldTitle>Currency</StyledAccountFieldTitle>
                <Field name="currency" component="input" placeholder="Currency" />
              </div>
              <div>
                <StyledAccountFieldTitle>Growth rate</StyledAccountFieldTitle>
                <Field name="growthRate" component="input" placeholder="Growth rate" />
              </div>
            </StyledAccountFormColumn>
            <StyledAccountFormColumn>
              <div>
                <StyledAccountFieldTitle>Risk factor</StyledAccountFieldTitle>
                <Field name="riskFactor" component="input" placeholder="Risk factor" />
              </div>
              <div>
                <StyledAccountFieldTitle>Bank</StyledAccountFieldTitle>
                <Field name="bank.name" component="input" placeholder="Bank name" />
              </div>
              <div>
                <StyledAccountFieldTitle>Type of account</StyledAccountFieldTitle>
                <Field name="type" component="input" placeholder="Type" />
              </div>
            </StyledAccountFormColumn>
          </StyledAccountEditFormContainer>
          <StyledSubmitButtonContainer>
            <Button type="submit">Submit</Button>
            <Button variant="secondary" style={{ marginLeft: '10px' }} onClick={() => handleEditModeChange(false)}>
              Cancel
            </Button>
          </StyledSubmitButtonContainer>
        </form>
      )}
    />
  );
};

export default AccountEdit;
