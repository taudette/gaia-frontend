import React from 'react';
import { configure, shallow } from 'enzyme';
import Home from '../../containers/Home';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

test('Home Container is connected', () => {
  const mockStore = configureStore([]);
  const store = mockStore({});
  const wrapper = shallow(<Provider store={store}>
    <Home />
  </Provider>);
  expect(wrapper.text()).toBe('<Connect(Home) />');
})

