import React, { useContext, useState } from 'react';
import { ApplicationContext } from '../context';
import { useHistory } from 'react-router-dom';
import { get } from '../utils/httputil';
import { ENDPOINT_URL } from '../constants';
import { StyledAccountsContainer, StyledContainer } from '../styles';
import { Alert, Button } from 'react-bootstrap';
import CashFlow from '../components/cashflows/CashFlow';

const CashFlows = () => {
  const { email, password, customerId } = useContext(ApplicationContext);
  const [refetch, setRefetch] = useState(false);

  const history = useHistory();

  const redirectToUrl = (url) => {
    history.push(url);
  };

  if (!email && !password && !customerId) {
    redirectToUrl('not-logged-in');
  }

  const [cashFlows, setCashFlows] = useState([]);

  React.useEffect(() => {
    const fetchData = () => {
      get(ENDPOINT_URL + 'cashflows', { customerId })
        .then((data) => setCashFlows(data))
        .then(() => setRefetch(false));
    };
    fetchData();
  }, [refetch]);

  console.log('fetched cashflows', cashFlows);

  const cashFlowsList = cashFlows.map((cashflow) => (
    <CashFlow handleRefetch={setRefetch} key={cashflow.id} cashflow={cashflow} />
  ));

  return (
    <StyledContainer>
      <Alert>Update your cash flows</Alert> <StyledAccountsContainer>{cashFlowsList}</StyledAccountsContainer>
      <div>
        <Button
          style={{ marginLeft: '10px', width: '200px' }}
          variant="info"
          onClick={() => history.push('/cashflow-new')}
        >
          Add new cash flow
        </Button>
        <Button
          style={{ marginLeft: '10px', width: '200px' }}
          variant="secondary"
          onClick={() => history.push('/dashboard')}
        >
          Back to dashboard
        </Button>
      </div>
    </StyledContainer>
  );
};

export default CashFlows;
