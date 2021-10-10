import React, { useContext, useState } from 'react';
import { StyledAccountsContainer, StyledContainer } from '../styles';
import { Alert, Button } from 'react-bootstrap';
import { ApplicationContext } from '../context';
import { useHistory } from 'react-router-dom';
import { get } from '../utils/httputil';
import { ENDPOINT_URL } from '../constants';
import Goal from '../components/goals/Goal';

const Goals = () => {
  const { email, password, customerId } = useContext(ApplicationContext);
  const [refetch, setRefetch] = useState(false);

  const history = useHistory();

  const redirectToUrl = (url) => {
    history.push(url);
  };

  if (!email && !password && !customerId) {
    redirectToUrl('not-logged-in');
  }

  const [goals, setGoals] = useState([]);

  React.useEffect(() => {
    const fetchData = () => {
      get(ENDPOINT_URL + 'goals', { customerId })
        .then((data) => setGoals(data))
        .then(() => setRefetch(false));
    };
    fetchData();
  }, [refetch]);

  console.log('fetched goals', goals);

  const goalsList = goals.map((goal) => <Goal handleRefetch={setRefetch} key={goal.id} goal={goal} />);

  return (
    <StyledContainer>
      <Alert>Update your goals</Alert> <StyledAccountsContainer>{goalsList}</StyledAccountsContainer>
      <div>
        <Button style={{ marginLeft: '10px', width: '200px' }} variant="info" onClick={() => history.push('/goal-new')}>
          Add new Goal
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

export default Goals;
