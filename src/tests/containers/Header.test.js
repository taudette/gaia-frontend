import React from 'react';
import { configure, shallow } from 'enzyme';
import { HeaderContainer } from '../../containers/Header';
import ConnectedHeader from '../../containers/Header';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

test('HeaderContainer Container is connected', () => {
  const mockStore = configureStore([]);
  const store = mockStore({});
  const wrapper = shallow(<Provider store={store}>
    <ConnectedHeader />
  </Provider>);
  expect(wrapper.text()).toBe('<Connect(HeaderContainer) />');
})

test('should render Header correctly', () => {
  const wrapper = shallow(<HeaderContainer />);
  expect(wrapper).toMatchSnapshot();
});

