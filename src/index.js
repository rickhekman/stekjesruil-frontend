import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './i18n'
import App from './App';
import { Provider } from 'react-redux'
import store from './store'

const Loader = () => (

  <div>loading...</div>

);

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </Provider>
  , document.getElementById('root'));

