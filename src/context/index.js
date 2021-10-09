import * as React from 'react';

export const ApplicationContext = React.createContext({
  email: '',
  setEmail: () => {},
  password: '',
  setPassword: () => {},
  customerId: '',
  setCustomerId: () => {},
});
