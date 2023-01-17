import React from 'react';
import ReactDOM from 'react-dom/client';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { App } from '~/App';
import '~/assets/styles/index.css';
import globalReducer from '~/state';

// * Configure Store
const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
