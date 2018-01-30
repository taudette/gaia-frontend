import React from 'react';
import { shallow } from 'enzyme';
import LoadButtonsComponent from '../../components/Video';
import data from '../fixtures/loadButtons';

test('should render LoadButtonsComponent without props', () => {
  const wrapper = shallow(<LoadButtonsComponent  />)
  expect(wrapper).toMatchSnapshot();
})

test('should render LoadButtonsComponent with props', () => {
  const wrapper = shallow(<LoadButtonsComponent addVideos={data.addVideos} goToTop={data.goToTop} endIndex={data.index} listLength={data.listLength} fetching={data.loading} />)
  expect(wrapper).toMatchSnapshot();
})
