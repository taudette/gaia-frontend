import React from 'react';
import { shallow } from 'enzyme';
import { HeroComponent } from '../../components/Hero';
import heroData from '../fixtures/hero';

test('should render hero', () => {
  const wrapper = shallow(<HeroComponent hero={heroData} />)
  expect(wrapper).toMatchSnapshot();
})

test('should render hero component without hero data', () => {
  const wrapper = shallow(<HeroComponent hero={{}} />)
  expect(wrapper).toMatchSnapshot();
})