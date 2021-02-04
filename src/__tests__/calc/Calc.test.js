import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Calc from '../../components/Calc';

it('renders correctly', () => {
  const calc = renderer.create(
    <BrowserRouter>
      <Calc />
    </BrowserRouter>,
  ).toJSON();
  expect(calc).toMatchSnapshot();
});
