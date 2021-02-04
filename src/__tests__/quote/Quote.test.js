import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Quote from '../../components/Quote';

it('renders correctly', () => {
  const quote = renderer.create(
    <BrowserRouter>
      <Quote />
    </BrowserRouter>,
  ).toJSON();
  expect(quote).toMatchSnapshot();
});
