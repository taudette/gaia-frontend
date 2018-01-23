import React, { Component } from 'react';
import { render } from 'react-dom';
import './styles/styles.scss';
import configureStore from './store/configureStore';

const store = configureStore();

console.log(store.getState());

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));