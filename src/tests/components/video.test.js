import React from 'react';
import { shallow } from 'enzyme';
import { VideoComponent } from '../../components/Video';
import video from '../fixtures/video';

test('should render video', () => {
  const wrapper = shallow(<VideoComponent {...video} key="1" />)
  expect(wrapper).toMatchSnapshot();
})

test('should render video component without video', () => {
  const wrapper = shallow(<VideoComponent  />)
  expect(wrapper).toMatchSnapshot();
})