import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import Approuter from './routers/AppRouter';
import Header from './containers/Header'
import './styles/app.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <div>
      <Header />
      <Approuter />
    </div>
  </Provider>
)

render(jsx, document.getElementById('app'));