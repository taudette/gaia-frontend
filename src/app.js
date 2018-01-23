import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles/styles.scss';
import configureStore from './store/configureStore';
import Approuter from './routers/AppRouter';

const store = configureStore();

render(<Approuter />, document.getElementById('app'));