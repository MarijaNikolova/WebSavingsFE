import React, { useContext, useState } from 'react';
import { StyledAccountsContainer, StyledContainer } from '../styles';
import { Alert, Button } from 'react-bootstrap';
import { ApplicationContext } from '../context';
import { useHistory } from 'react-router-dom';
import { get } from '../utils/httputil';
import { ENDPOINT_URL } from '../constants';
import Account from '../components/Account';

const Accounts = () => {
  const { email, password, customerId } = useContext(ApplicationContext);
  const [refetch, setRefetch] = useState(false);

  const history = useHistory();

  const redirectToUrl = (url) => {
    history.push(url);
  };

  if (!email && !password && !customerId) {
    redirectToUrl('not-logged-in');
  }

  const [accounts, setAccounts] = useState([]);

  React.useEffect(() => {
    const fetchData = () => {
      get(ENDPOINT_URL + 'accounts', { customerId })
        .then((data) => setAccounts(data))
        .then(() => setRefetch(false));
    };
    fetchData();
  }, [refetch]);

  console.log(accounts);

  const accountsList = accounts.map((account) => (
    <Account handleRefetch={setRefetch} key={account.id} account={account} />
  ));

  return (
    <StyledContainer>
      <Alert>Add, update or delete your accounts. </Alert>{' '}
      <StyledAccountsContainer>{accountsList}</StyledAccountsContainer>
      <Button
        style={{ marginLeft: '10px', width: '200px' }}
        variant="secondary"
        onClick={() => history.push('/dashboard')}
      >
        Back to dashboard
      </Button>
    </StyledContainer>
  );
};

export default Accounts;
