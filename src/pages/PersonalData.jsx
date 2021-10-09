import React, { useContext, useState } from 'react';
import { ApplicationContext } from '../context';
import { get, put } from '../utils/httputil';
import { ENDPOINT_URL } from '../constants';
import { Field, Form as FinalForm } from 'react-final-form';
import { Alert, Button, Card } from 'react-bootstrap';
import { StyledFieldHolder, StyledFormContainer, StyledSubmitButtonContainer } from '../styles';
import { useHistory } from 'react-router-dom';
import data from 'bootstrap/js/src/dom/data';

const PersonalData = () => {
  const { email, password, customerId } = useContext(ApplicationContext);
  console.log(email, password);
  const [clientData, setClientData] = useState({});
  const [configData, setConfigData] = useState({});
  const [saveSuccessful, setSaveSuccessful] = useState(false);

  React.useEffect(() => {
    const fetchData = () => {
      get(ENDPOINT_URL + 'customer', { customerEmail: email, customerPassword: password })
        .then((data) => setClientData(data))
        .then(() => {
          get(ENDPOINT_URL + 'config-data', { customerId }).then((data) => setConfigData(data));
        });
    };
    fetchData();
  }, [email, password]);

  console.log(clientData, configData);
  const history = useHistory();

  return (
    <FinalForm
      onSubmit={(values) => {
        console.log(values);
        const customerData = {
          name: values.name,
          surname: values.surname,
          dateOfBirth: values.dateOfBirth,
          email: values.email,
          password: values.password,
        };

        const configData = {
          customerId: customerId,
          numberOfYears: parseInt(values.numberOfYears),
          language: values.language,
        };

        put(ENDPOINT_URL + 'customer', {}, customerData)
          .then((result) => {})
          .then(() => {
            put(ENDPOINT_URL + 'config-data', { customerId }, configData).then(() => setSaveSuccessful(true));
          });
      }}
      validate={() => {}}
      initialValues={{ ...clientData, ...configData }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {saveSuccessful && (
            <Alert variant="success">Your data has been saved successfully. Go back to dashboard.</Alert>
          )}
          <Card style={{ width: '500px' }}>
            <Card.Body>
              <StyledFormContainer>
                <h4>Edit your personal data</h4>
                <StyledFieldHolder>
                  <div>Name</div>
                  <Field name="name" component="input" placeholder="Name" />
                </StyledFieldHolder>
                <StyledFieldHolder>
                  <div>Surname</div>
                  <Field name="surname" component="input" placeholder="Surname" />
                </StyledFieldHolder>
                <StyledFieldHolder>
                  <div>Date of birth</div>
                  <Field name="dateOfBirth" component="input" placeholder="Date of birth" type="date" />
                </StyledFieldHolder>
                <StyledFieldHolder>
                  <div>Email address</div>
                  <Field name="email" component="input" placeholder="Email" type="email" />
                </StyledFieldHolder>
                <StyledFieldHolder>
                  <div>Password</div>
                  <Field name="password" component="input" placeholder="Password" type="password" />
                </StyledFieldHolder>
              </StyledFormContainer>
              <StyledFormContainer>
                <h4>Edit your configuration data</h4>
                <StyledFieldHolder>
                  <div>Number of years to project</div>
                  <Field name="numberOfYears" component="input" placeholder="Number of year" min="1" type="number" />
                </StyledFieldHolder>
                <StyledFieldHolder>
                  <div>Language</div>
                  <Field name="language" component="select">
                    <option />
                    <option value="EN">English</option>
                    <option value="MK">Macedonian</option>
                  </Field>
                </StyledFieldHolder>
              </StyledFormContainer>
              <StyledSubmitButtonContainer>
                <Button type="submit">Submit</Button>
                <Button style={{ marginLeft: '10px' }} variant="secondary" onClick={() => history.push('/dashboard')}>
                  Back to dashboard
                </Button>
              </StyledSubmitButtonContainer>
            </Card.Body>
          </Card>
        </form>
      )}
    />
  );
};

export default PersonalData;
