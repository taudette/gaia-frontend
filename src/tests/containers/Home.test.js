import React from 'react';
import { configure, shallow } from 'enzyme';
import ConnectedHome from '../../containers/Home';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { HomeContainer } from '../../containers/Home';

test('Home Container is connected', () => {
  const mockStore = configureStore([]);
  const store = mockStore({});
  const wrapper = shallow(<Provider store={store}>
    <ConnectedHome />
  </Provider>);
  expect(wrapper.text()).toBe('<Connect(HomeContainer) />');
})

test('should render Home correctly', () => {
  const wrapper = shallow(<HomeContainer />);
  expect(wrapper).toMatchSnapshot();
});