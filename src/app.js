import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import Approuter from './routers/AppRouter';
import Header from './containers/Header'
import Nav from './containers/Nav'
import styles from './styles/app.scss';

const store = configureStore();
console.log('app.js!!')
const jsx = (
  <Provider store={store}>
    <div>
      <Nav />
      <Header />
      <Approuter />
    </div>
  </Provider>
)
console.log('test')
render(jsx, document.getElementById('app'));