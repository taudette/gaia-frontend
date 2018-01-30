import React from 'react';
import { configure, shallow } from 'enzyme';
import HeaderContainer from '../../containers/Header';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

test('HeaderContainer Container is connected', () => {
  const mockStore = configureStore([]);
  const store = mockStore({});
  const wrapper = shallow(<Provider store={store}>
    <HeaderContainer />
  </Provider>);
  expect(wrapper.text()).toBe('<Connect(HeaderContainer) />');
})
