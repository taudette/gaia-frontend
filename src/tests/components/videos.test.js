import React from 'react';
import { shallow } from 'enzyme';
import { VideosComponent } from '../../components/Videos';
//import videos from '../fixtures/videos';

test('should render videos component without videos', () => {
  const wrapper = shallow(<VideosComponent videos={[]} loading={false} />)
  expect(wrapper).toMatchSnapshot();
})