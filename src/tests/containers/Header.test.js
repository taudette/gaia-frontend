import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../containers/Header';

//use shallow rendering for testing single components without their children
test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

  // Other test options:
  // expect(wrapper.find('h1').length).toBe(1);
  // expect(wrapper.find('h1').text()).toBe('Header for react boiler');
});