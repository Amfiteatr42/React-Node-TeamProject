import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
// import 'modern-normalize/modern-normalize.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
    {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);
