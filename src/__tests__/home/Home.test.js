import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from '../../components/Home';

it('renders correctly', () => {
  const home = renderer.create(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  ).toJSON();
  expect(home).toMatchSnapshot();
});
