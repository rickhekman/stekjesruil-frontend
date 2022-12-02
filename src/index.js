import React, { Suspense } from 'react';
import {createRoot} from "react-dom/client";
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import './i18n'
import App from './App';
import { Provider } from 'react-redux'
import store from './store';

const root = createRoot(document.getElementById("root"));

const Loader = () => (

  <div>loading...</div>

);

root.render(
  <Provider store={store}>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </Provider>
  );
