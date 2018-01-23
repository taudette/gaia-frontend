import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './styles/styles.scss';
import configureStore from './store/configureStore';
import Approuter from './routers/AppRouter';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <Approuter />
  </Provider>
)

render(jsx, document.getElementById('app'));