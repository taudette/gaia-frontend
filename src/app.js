import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import Approuter from './routers/AppRouter';
import Nav from './components/Nav';
import Header from './containers/Header';
import styles from './styles/app.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <div>
      <Header />
      <Nav />
      <Approuter />
    </div>
  </Provider>
)

render(jsx, document.getElementById('app'));