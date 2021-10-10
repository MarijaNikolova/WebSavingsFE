import './App.css';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import LoginForm from './pages/LoginForm';
import styled from 'styled-components';
import SignUpForm from './pages/SignUpForm';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PersonalData from './pages/PersonalData';
import CashFlows from './pages/CashFlows';
import Goals from './pages/Goals';
import Accounts from './pages/Accounts';
import Projection from './pages/Projection';
import { useState } from 'react';
import { ApplicationContext } from './context';
import NotLoggedIn from './pages/NotLoggedIn';
import AccountEdit from './components/accounts/AccountEdit';
import AccountNew from './components/accounts/AccountNew';
import GoalNew from './components/goals/GoalNew';
import GoalEdit from './components/goals/GoalEdit';
import CashFlowNew from './components/cashflows/CashFlowNew';
import CashFlowEdit from './components/cashflows/CashFlowEdit';
import PageNotFound from './pages/PageNotFound';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [customerId, setCustomerId] = useState('');
  const value = { email, setEmail, password, setPassword, customerId, setCustomerId };
  return (
    <ApplicationContext.Provider value={value}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/sign-up">
              <SignUpForm />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/personal-data">
              <PersonalData />
            </Route>
            <Route path="/cashflows">
              <CashFlows />
            </Route>
            <Route path="/goals">
              <Goals />
            </Route>
            <Route path="/accounts">
              <Accounts />
            </Route>
            <Route path="/projection">
              <Projection />
            </Route>
            <Route path="/not-logged-in">
              <NotLoggedIn />
            </Route>
            <Route path="/account-edit">
              <AccountEdit />
            </Route>
            <Route path="/account-new">
              <AccountNew />
            </Route>
            <Route path="/goal-new">
              <GoalNew />
            </Route>
            <Route path="/goal-edit">
              <GoalEdit />
            </Route>
            <Route path="/cashflow-new">
              <CashFlowNew />
            </Route>
            <Route path="/cashflow-edit">
              <CashFlowEdit />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ApplicationContext.Provider>
  );
}

export default App;
