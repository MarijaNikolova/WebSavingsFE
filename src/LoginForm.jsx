import { Form as FinalForm, Field } from 'react-final-form';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { StyledInput } from './styles';
import { get } from './utils/httputil';
import { ENDPOINT_URL } from './constants';
import { checkError } from './utils/fetchutils';

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StyledFieldHolder = styled.div`
  margin: 10px;
  text-align: left;
`;

const StyledSubmitButtonContainer = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const LoginForm = () => (
  <FinalForm
    onSubmit={(values) => {
      console.log(values);
      get(ENDPOINT_URL + 'customer', {
        customerEmail: values.email,
        customerPassword: values.password,
      })
        .then((result) => console.log(result))
        .catch((reason) => alert('Something went wrong. Please check your credentials.'));
    }}
    validate={() => {}}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <StyledFormContainer>
          <h2>Login to continue</h2>
          <StyledFieldHolder>
            <div>Email address</div>
            <Field name="email" component="input" placeholder="Email" type="email" />
          </StyledFieldHolder>
          <StyledFieldHolder>
            <div>Password</div>
            <Field name="password" component="input" placeholder="Password" type="password" />
          </StyledFieldHolder>
          <StyledSubmitButtonContainer>
            <Button type="submit">Submit</Button>
          </StyledSubmitButtonContainer>
          <p>If you don't have an account, Sign up to continue. </p>
        </StyledFormContainer>
      </form>
    )}
  />
);

export default LoginForm;
