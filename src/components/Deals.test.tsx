import { render, screen } from '@testing-library/react';
import Deals from './Deals';

test('renders example component', () => {
  render(<Deals />);
  expect(screen.getByText('Example Text')).toBeInTheDocument();
});
