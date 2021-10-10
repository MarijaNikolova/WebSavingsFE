import React, { useContext, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ApplicationContext } from '../context';
import { useHistory } from 'react-router-dom';
import { get } from '../utils/httputil';
import { ENDPOINT_URL } from '../constants';
import { Alert, Button } from 'react-bootstrap';

const Projection = () => {
  const { email, password, customerId } = useContext(ApplicationContext);

  const history = useHistory();

  const redirectToUrl = (url) => {
    history.push(url);
  };

  if (!email && !password && !customerId) {
    redirectToUrl('not-logged-in');
  }

  const [projections, setProjections] = useState([]);
  const [goals, setGoals] = useState([]);

  React.useEffect(() => {
    const fetchData = () => {
      get(ENDPOINT_URL + 'projections', { customerId })
        .then((data) => setProjections(data))
        .then(() => get(ENDPOINT_URL + 'goals', { customerId }))
        .then((data) => setGoals(data));
    };
    fetchData();
  }, [customerId]);

  console.log('fetched projections', projections);

  const getChartData = (projections, category) => {
    return projections
      .filter((projection) => projection.category === category)
      .map((projection) => {
        const name = projection.description;
        const data = Object.entries(projection?.values).map((annualValue) => {
          const year = annualValue[1]?.year;
          const value = annualValue[1]?.value?.value;
          return [year, value];
        });
        return { name: name, data: data };
      });
  };

  const accountChartData = getChartData(projections, 'ACCOUNT');

  const accountOptions = {
    chart: {
      type: 'spline',
    },
    title: {
      text: 'Savings accounts overview',
    },
    series: accountChartData,
  };

  const getCashFlowChartData = (projections, category) => {
    return projections
      .filter((projection) => projection.category === category)
      .map((projection) => {
        const name = projection.description;
        const data = Object.entries(projection?.values).map((annualValue) => {
          const year = annualValue[1]?.year;
          const expense = annualValue[1]?.value?.expense;
          const income = annualValue[1]?.value?.income;
          return [year, income - expense];
        });
        return { name: name, data: data };
      });
  };

  const cashflowOptions = {
    chart: {
      type: 'spline',
    },
    title: {
      text: 'Cash flows overview',
    },
    series: getCashFlowChartData(projections, 'CASHFLOW'),
  };

  const listOfGoals = goals.map((goal) => {
    return (
      <Alert variant="info">
        {goal.description} planned for {goal.plannedFor} with value {goal.value}
        {goal.currency}
      </Alert>
    );
  });

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={accountOptions} />
      <HighchartsReact highcharts={Highcharts} options={cashflowOptions} />
      {goals.length > 0 && (
        <div>
          <h3>Goals to consider: </h3>
          {listOfGoals}
        </div>
      )}
      <Button style={{ marginLeft: '10px' }} variant="secondary" onClick={() => history.push('/dashboard')}>
        Back to dashboard
      </Button>
    </div>
  );
};

export default Projection;
