// Core
import React from 'react';
import { Provider } from 'react-redux';

import AppRoutes from './routes';
import store from './storeConfig';

const App = () =>
  <Provider store={store}>
    <AppRoutes />
  </Provider>;

export default App;
