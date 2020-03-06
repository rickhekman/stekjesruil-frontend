import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './i18n'
import App from './App';

const Loader = () => (

  <div>loading...</div>

);

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
  , document.getElementById('root'));

