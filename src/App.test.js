import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './components/calculator/App';

test('renders learn react link', () => {
  render(<App />);
  const app = renderer.create(<App />).toJSON();
  expect(app).toMatchSnapshot();
});
