import React from 'react';
import renderer from 'react-test-renderer';
import Calc from '../../components/Calc';

it('renders correctly', () => {
  const calc = renderer.create(<Calc />).toJSON();
  expect(calc).toMatchSnapshot();
});
