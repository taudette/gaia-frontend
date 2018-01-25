import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../containers/Header';
import toJSON from 'enzyme-to-json';

//use shallow rendering for testing single components without their children

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(toJSON(wrapper)).toMatchSnapshot(); //toJSON removes unnecesary info in snapshot


  expect(wrapper.find('h1').length).toBe(1);
  expect(wrapper.find('h1').text()).toBe('Header for react boiler');
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  //console.log(renderer.getRenderOutput());
})