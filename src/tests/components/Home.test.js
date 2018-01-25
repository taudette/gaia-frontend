import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../../components/Home';
import testData from '../fixtures/home';

test('should render test data from props', () => {
  const wrapper = shallow(<Home testData={testData} />);
  expect(wrapper).toMatchSnapshot();
})

test('should render with no props', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
})