import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { store } from './store';
import { persistor } from './store';

import './global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
